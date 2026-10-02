# 2FN — Cada dato debe depender de toda la clave

**Idea:** si una fila se identifica combinando pedido y producto, el nombre del producto no debe repetirse en cada pedido. Ese nombre depende del producto solamente.

**Caso real:** una tienda vende el mismo producto en muchos pedidos. Corregir su nombre no debería exigir actualizar cientos de líneas de venta.

**Tiempo orientativo:** 20–30 minutos. Es independiente del ejercicio anterior.

## La regla, con palabras simples

Una tabla está en 2FN cuando cumple 1FN y ningún atributo ajeno a las claves candidatas depende de solo una parte de alguna clave candidata compuesta. Una **clave candidata** es una columna, o conjunto mínimo de columnas, que podría identificar de forma única cada fila. Elegimos una como PK.

Para este ejercicio solo hay una clave candidata: `(pedido_id, producto_id)`. Suponemos que cada producto aparece una sola vez por pedido; las unidades se acumulan en `cantidad`.

| Dato | ¿De qué depende? | ¿Dónde corresponde? |
|---|---|---|
| nombre_producto | Solo de producto_id | productos |
| cantidad | Del pedido y del producto juntos | pedido_items |

**Ejemplo:** el producto 10 se llama Teclado tanto en el pedido 100 como en el 101. Pero su cantidad puede ser 2 en uno y 1 en el otro.

## Antes de ejecutar

Este ejercicio es independiente. Ejecutá los bloques en el orden del archivo. Los comandos `bash` van en la terminal de Linux; los bloques `sql` y `psql` se pegan dentro de `psql`, la consola de PostgreSQL. No pegues las líneas con tres comillas invertidas que delimitan los bloques.

En Linux, buscá el nombre del contenedor:

```bash
docker ps --format 'table {{.Names}}	{{.Image}}'
```

Entrá a PostgreSQL; reemplazá `mi_postgres` por el nombre real:

```bash
docker exec -it mi_postgres psql -U postgres -d postgres
```

Si configuraste otro usuario administrador, reemplazá `postgres` después de `-U`. Usá el usuario y las credenciales de tu contenedor. No hace falta exponer el puerto del contenedor para este comando.

Creá **una sola vez para los cuatro ejercicios** una base de práctica:

```sql
CREATE DATABASE practica_normalizacion;
```

Si ya existe, omití ese comando. Después, dentro de `psql`:

```psql
\c practica_normalizacion
\pset pager off
```

`\c` cambia de base. `\pset pager off` muestra los resultados sin abrir un paginador. Los comandos que empiezan con `\` no llevan punto y coma; los comandos SQL sí. `\q` sale de `psql`. Si quedó una consulta a medio escribir, Ctrl+C permite cancelarla.

Cada ejercicio usa su propio **schema**, una agrupación de tablas dentro de esta base. Así pueden existir tablas con el mismo nombre en ejercicios diferentes. Si volvés a conectarte, repetí el `SET search_path` de este archivo. La preparación borra únicamente el schema de este ejercicio para poder empezar de cero: usala en esta base de práctica.

## 1. Preparar el ejercicio

```sql
DROP SCHEMA IF EXISTS nf2 CASCADE;
CREATE SCHEMA nf2;
SET search_path TO nf2;
```

## 2. Crear una tabla en 1FN que falla en 2FN

```sql
CREATE TABLE pedido_items_antes (
    pedido_id INTEGER NOT NULL,
    producto_id INTEGER NOT NULL,
    nombre_producto TEXT NOT NULL,
    cantidad INTEGER NOT NULL CHECK (cantidad > 0),
    PRIMARY KEY (pedido_id, producto_id)
);

INSERT INTO pedido_items_antes VALUES
    (100, 10, 'Teclado', 2),
    (100, 20, 'Mouse', 1),
    (101, 10, 'Teclado', 1);

SELECT * FROM pedido_items_antes ORDER BY pedido_id, producto_id;
```

| pedido_id | producto_id | nombre_producto | cantidad |
|---|---|---|---|
| 100 | 10 | Teclado | 2 |
| 100 | 20 | Mouse | 1 |
| 101 | 10 | Teclado | 1 |

Hay valores individuales, pero `Teclado` se repite porque guardamos datos del catálogo dentro de cada venta.

## 3. Provocar el problema sin dejar datos rotos

```sql
BEGIN;

UPDATE pedido_items_antes
SET nombre_producto = 'Teclado USB'
WHERE pedido_id = 100 AND producto_id = 10;

SELECT pedido_id, producto_id, nombre_producto
FROM pedido_items_antes
WHERE producto_id = 10
ORDER BY pedido_id;

ROLLBACK;
```

| pedido_id | producto_id | nombre_producto |
|---|---|---|
| 100 | 10 | Teclado USB |
| 101 | 10 | Teclado |

Un producto tiene dos nombres actuales contradictorios. PostgreSQL aceptó el cambio: la PK impide duplicar filas, pero no resuelve el diseño. `BEGIN` inicia una transacción y `ROLLBACK` deshace los cambios de esta demostración. La tabla vuelve a tener `Teclado` en ambas filas.

También sería difícil registrar un producto que todavía no se vendió: la tabla exige un pedido. Y si borráramos su última venta, perderíamos el único registro de su nombre.

## 4. Separar el catálogo de los ítems del pedido

```sql
CREATE TABLE pedidos (
    pedido_id INTEGER PRIMARY KEY
);

CREATE TABLE productos (
    producto_id INTEGER PRIMARY KEY,
    nombre_producto TEXT NOT NULL
);

CREATE TABLE pedido_items (
    pedido_id INTEGER NOT NULL REFERENCES pedidos(pedido_id),
    producto_id INTEGER NOT NULL REFERENCES productos(producto_id),
    cantidad INTEGER NOT NULL CHECK (cantidad > 0),
    PRIMARY KEY (pedido_id, producto_id)
);

INSERT INTO pedidos
SELECT DISTINCT pedido_id FROM pedido_items_antes;

INSERT INTO productos
SELECT DISTINCT producto_id, nombre_producto FROM pedido_items_antes;

INSERT INTO pedido_items
SELECT pedido_id, producto_id, cantidad FROM pedido_items_antes;
```

`DISTINCT` quita filas idénticas del resultado. Funciona aquí porque los datos originales son coherentes: para cada producto hay un único nombre. Si el mismo ID tuviera dos nombres distintos, habría que resolver el conflicto antes de migrar, no elegir uno al azar.

La tabla `pedidos` está reducida a su ID para concentrarnos en la regla. En una aplicación podría incluir fecha, cliente y estado. `CHECK (cantidad > 0)` rechaza cantidades cero o negativas; no es una regla de normalización, sino una validación del negocio.

## 5. Cambiar un solo registro y ver todos los pedidos

```sql
UPDATE productos
SET nombre_producto = 'Teclado USB'
WHERE producto_id = 10;

SELECT i.pedido_id, p.nombre_producto, i.cantidad
FROM pedido_items AS i
JOIN productos AS p ON p.producto_id = i.producto_id
ORDER BY i.pedido_id, i.producto_id;
```

| pedido_id | nombre_producto | cantidad |
|---|---|---|
| 100 | Teclado USB | 2 |
| 100 | Mouse | 1 |
| 101 | Teclado USB | 1 |

Actualizamos un registro del catálogo y las consultas muestran el nombre actual en todas las ventas. La cantidad permanece en el ítem porque necesita identificar **qué producto de qué pedido**.

## 6. ¿Cuándo usarla? Un detalle importante del mundo real

Revisala en relaciones con claves compuestas: producto–pedido, alumno–curso, usuario–proyecto. Preguntá si cada columna describe la combinación completa o solo a uno de sus integrantes.

Agregar un `id` artificial a la tabla original no elimina la repetición ni la dependencia parcial de la clave candidata `(pedido_id, producto_id)`. La normalización considera las claves candidatas, no únicamente la PK que elegiste declarar.

**Precio y nombre históricos:** aquí mostramos el nombre **actual del catálogo**. Si una factura necesita conservar el nombre o precio pactado al vender, es válido guardar `descripcion_vendida` o `precio_unitario_vendido` en el ítem: son hechos de esa venta, no el nombre o precio actual del catálogo. No deben cambiar cuando se actualiza el catálogo. Primero hay que definir qué significa cada columna.

## 7. Desafío para resolver entre las dos personas

1. Creen el producto 30, Monitor, aunque todavía no tenga ventas.
2. Creen el pedido 102.
3. Agreguen al pedido dos unidades del producto 30.
4. Muestren el pedido 102 con su nombre de producto y cantidad.

Pregunta: ¿podrían repetir `(102, 30)` para cargar una tercera unidad? En este modelo deben actualizar `cantidad`; la PK prohíbe repetir el par.

### Solución — leer después de intentar

```sql
INSERT INTO productos VALUES (30, 'Monitor');
INSERT INTO pedidos VALUES (102);
INSERT INTO pedido_items VALUES (102, 30, 2);

SELECT i.pedido_id, p.nombre_producto, i.cantidad
FROM pedido_items AS i
JOIN productos AS p ON p.producto_id = i.producto_id
WHERE i.pedido_id = 102;
```

Resultado: `102 | Monitor | 2`.

Para agregar esa tercera unidad:

```sql
UPDATE pedido_items
SET cantidad = cantidad + 1
WHERE pedido_id = 102 AND producto_id = 30;

SELECT * FROM pedido_items WHERE pedido_id = 102;
```

Resultado: `102 | 30 | 3`. La FK exige que pedido y producto existan antes de crear el ítem.

## Representarlo en draw.io

Abrí [draw.io](https://app.diagrams.net/), elegí **Dispositivo / Device** si pregunta dónde trabajar y luego **Archivo → Abrir desde → Dispositivo** (`File → Open From → Device`). Abrí `02_forma_normal.drawio`, incluido junto a este Markdown. El diagrama tiene dos páginas: **Antes** y **Después**. Los nombres de tablas y columnas coinciden con el SQL.

En **Antes**, la clave combina pedido y producto, pero el nombre depende solo del producto. En **Después**, `pedidos` y `productos` se conectan con `pedido_items`. Cada ítem pertenece a un pedido y a un producto.

Para dibujarlo ustedes: creen un rectángulo por tabla, escriban su nombre y columnas, marquen `PK` junto a la clave principal y `FK` junto a la columna que referencia otra tabla. Si la clave combina columnas, marquen todas con `PK` y aclaren que forman **una sola clave compuesta**. Unan la tabla principal con la tabla que la referencia y escriban `1 → 0..N`: una fila principal puede tener cero, una o muchas filas asociadas; cada fila asociada pertenece a exactamente una fila principal en estos ejemplos.

El archivo es editable; el diagrama documenta el diseño. Las restricciones reales se crean con el SQL, no dibujando las líneas.

## Ver las restricciones desde psql

```psql
\dt nf2.*
\d nf2.pedido_items
```

`pedido_items_antes` queda como comparación y no se mantiene sincronizada.

**Para recordar:** la cantidad describe al producto dentro de un pedido; el nombre actual describe al producto.

## Referencias para consultar

- [PostgreSQL: claves y restricciones](https://www.postgresql.org/docs/current/ddl-constraints.html).
- [PostgreSQL: consola psql](https://www.postgresql.org/docs/current/app-psql.html).
- [draw.io: abrir un diagrama](https://www.drawio.com/docs/manual/open-diagram-file/).


## Verificación del material

Los bloques SQL del ejercicio y sus soluciones se ejecutaron en PostgreSQL 18.3 mediante PGlite, y se comprobaron sus resultados. Los comandos de Docker y los metacomandos de psql son instrucciones para tu contenedor; no se ejecutaron contra tu instalación.
