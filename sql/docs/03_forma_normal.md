# 3FN — Los datos de otra entidad van en su propia tabla

**Idea:** el empleado pertenece a un departamento; el teléfono del departamento se guarda con el departamento, no se copia en cada empleado.

**Caso real:** una empresa cambia el teléfono de Ventas. El cambio debería hacerse una sola vez.

**Tiempo orientativo:** 20–30 minutos. Es independiente de los otros ejercicios.

## La regla, con palabras simples

Para este caso, 3FN significa cumplir 2FN y evitar que un dato ajeno a la clave dependa de ella a través de otro dato ajeno a la clave.

La cadena problemática es: `empleado_id → departamento_id → telefono_departamento`. La flecha significa “con este valor puedo determinar el otro”. El empleado determina su departamento, y el departamento determina su teléfono.

**Reglas del negocio de este ejemplo:** cada empleado pertenece a un departamento; cada departamento tiene un nombre y un único teléfono de contacto actual. Un departamento puede tener muchos empleados o ninguno. No estamos guardando el teléfono personal del empleado.

La tabla inicial ya cumple 2FN: su única clave candidata es `empleado_id`, de una sola columna, y no hay partes de esa clave de las que algo pueda depender. Eso no impide que falle en 3FN.

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
DROP SCHEMA IF EXISTS nf3 CASCADE;
CREATE SCHEMA nf3;
SET search_path TO nf3;
```

## 2. Crear la tabla problemática

```sql
CREATE TABLE empleados_antes (
    empleado_id INTEGER PRIMARY KEY,
    nombre_empleado TEXT NOT NULL,
    departamento_id INTEGER NOT NULL,
    nombre_departamento TEXT NOT NULL,
    telefono_departamento TEXT NOT NULL
);

INSERT INTO empleados_antes VALUES
    (1, 'Ana', 10, 'Ventas', '3514000000'),
    (2, 'Bruno', 10, 'Ventas', '3514000000'),
    (3, 'Carla', 20, 'Soporte', '3515000000');

SELECT * FROM empleados_antes ORDER BY empleado_id;
```

| empleado_id | nombre_empleado | departamento_id | nombre_departamento | telefono_departamento |
|---|---|---|---|---|
| 1 | Ana | 10 | Ventas | 3514000000 |
| 2 | Bruno | 10 | Ventas | 3514000000 |
| 3 | Carla | 20 | Soporte | 3515000000 |

Nombre y teléfono de Ventas están copiados dos veces. Con 500 empleados, podrían estar copiados 500 veces.

## 3. Mostrar una contradicción y luego deshacerla

```sql
BEGIN;

UPDATE empleados_antes
SET telefono_departamento = '3514999999'
WHERE empleado_id = 1;

SELECT nombre_empleado, nombre_departamento, telefono_departamento
FROM empleados_antes
WHERE departamento_id = 10
ORDER BY empleado_id;

ROLLBACK;
```

| nombre_empleado | nombre_departamento | telefono_departamento |
|---|---|---|
| Ana | Ventas | 3514999999 |
| Bruno | Ventas | 3514000000 |

¿A qué número debe llamar alguien para comunicarse con Ventas? La tabla da dos respuestas. `ROLLBACK` deshace este cambio y restaura los datos originales antes de continuar.

También hay problemas al agregar y borrar: no podemos registrar un departamento sin empleados, y borrar al último empleado de Soporte eliminaría el único registro del teléfono de Soporte.

## 4. Separar departamentos y empleados

```sql
CREATE TABLE departamentos (
    departamento_id INTEGER PRIMARY KEY,
    nombre_departamento TEXT NOT NULL,
    telefono_departamento TEXT NOT NULL
);

CREATE TABLE empleados (
    empleado_id INTEGER PRIMARY KEY,
    nombre_empleado TEXT NOT NULL,
    departamento_id INTEGER NOT NULL
        REFERENCES departamentos(departamento_id)
);

INSERT INTO departamentos
SELECT DISTINCT departamento_id, nombre_departamento, telefono_departamento
FROM empleados_antes;

INSERT INTO empleados
SELECT empleado_id, nombre_empleado, departamento_id
FROM empleados_antes;

SELECT * FROM departamentos ORDER BY departamento_id;
```

| departamento_id | nombre_departamento | telefono_departamento |
|---|---|---|
| 10 | Ventas | 3514000000 |
| 20 | Soporte | 3515000000 |

Solo hay una fila por departamento. `DISTINCT` sirve porque los registros del ejemplo son coherentes. Si un mismo departamento tuviera distintos teléfonos, la migración necesitaría una decisión previa sobre cuál es el correcto.

## 5. Actualizar un dato y consultar las relaciones

```sql
UPDATE departamentos
SET telefono_departamento = '3514999999'
WHERE departamento_id = 10;

SELECT e.nombre_empleado, d.nombre_departamento, d.telefono_departamento
FROM empleados AS e
JOIN departamentos AS d ON d.departamento_id = e.departamento_id
ORDER BY e.empleado_id;
```

| nombre_empleado | nombre_departamento | telefono_departamento |
|---|---|---|
| Ana | Ventas | 3514999999 |
| Bruno | Ventas | 3514999999 |
| Carla | Soporte | 3515000000 |

No actualizamos a Ana ni a Bruno. Al consultar, ambos se vinculan con la misma fila de Ventas. El resultado repite el teléfono para mostrarlo junto a cada empleado; eso está bien. **Repetir un dato en el resultado de un JOIN no es lo mismo que guardar varias copias que pueden contradecirse.**

## 6. ¿Cuándo usarla? Diferencia con 2FN

| 2FN | 3FN |
|---|---|
| Un dato depende solo de parte de una clave compuesta. | Un dato depende de la clave a través de otro atributo ajeno a las claves. |
| El nombre del producto depende de producto_id, no del par pedido–producto. | El teléfono del departamento depende de departamento_id, no directamente del empleado como hecho propio. |

Revisá 3FN cuando varias filas guardan datos actuales de una misma entidad: dirección actual del proveedor en productos, nombre de la categoría en artículos, o teléfono del departamento en empleados. Identificá primero qué entidad es dueña de cada dato.

No significa que dos columnas nunca puedan tener valores iguales, ni que todas las columnas deban tener una tabla propia. Tampoco obliga a reemplazar una dirección histórica de entrega por la dirección actual del cliente: representan hechos diferentes.

**Precisión para seguir estudiando:** la formulación general de 3FN exige que, en cada dependencia funcional no trivial `X → A`, `X` sea una superclave o `A` pertenezca a alguna clave candidata. Una superclave es un conjunto que identifica de manera única una fila, aunque pueda incluir columnas de más. En este ejemplo solo `empleado_id` es clave candidata, así que la cadena departamento→teléfono viola esa condición. La regla práctica anterior alcanza para resolver este caso sin estudiar todavía claves superpuestas.

## 7. Desafío para resolver entre las dos personas

1. Creen el departamento 30, Compras, teléfono `3516000000`, sin empleados.
2. Muevan a Bruno a Compras modificando solamente su `departamento_id`.
3. Consulten de nuevo empleados, departamentos y teléfonos.
4. ¿Hace falta copiar el teléfono de Compras en la fila de Bruno?

### Solución — leer después de intentar

```sql
INSERT INTO departamentos VALUES (30, 'Compras', '3516000000');

UPDATE empleados
SET departamento_id = 30
WHERE empleado_id = 2;

SELECT e.nombre_empleado, d.nombre_departamento, d.telefono_departamento
FROM empleados AS e
JOIN departamentos AS d ON d.departamento_id = e.departamento_id
ORDER BY e.empleado_id;
```

| nombre_empleado | nombre_departamento | telefono_departamento |
|---|---|---|
| Ana | Ventas | 3514999999 |
| Bruno | Compras | 3516000000 |
| Carla | Soporte | 3515000000 |

No se copia el teléfono. Cambiar la relación de Bruno alcanza. Si se intentara asignarle un departamento que no existe, la FK rechazaría el cambio.

## Representarlo en draw.io

Abrí [draw.io](https://app.diagrams.net/), elegí **Dispositivo / Device** si pregunta dónde trabajar y luego **Archivo → Abrir desde → Dispositivo** (`File → Open From → Device`). Abrí `03_forma_normal.drawio`, incluido junto a este Markdown. El diagrama tiene dos páginas: **Antes** y **Después**. Los nombres de tablas y columnas coinciden con el SQL.

En **Antes**, los datos del departamento aparecen dentro de `empleados_antes`. En **Después**, `departamentos` se conecta con `empleados` por `departamento_id`. Ese ID se repite en empleados para expresar la relación; nombre y teléfono se guardan una sola vez en departamentos.

Para dibujarlo ustedes: creen un rectángulo por tabla, escriban su nombre y columnas, marquen `PK` junto a la clave principal y `FK` junto a la columna que referencia otra tabla. Si la clave combina columnas, marquen todas con `PK` y aclaren que forman **una sola clave compuesta**. Unan la tabla principal con la tabla que la referencia y escriban `1 → 0..N`: una fila principal puede tener cero, una o muchas filas asociadas; cada fila asociada pertenece a exactamente una fila principal en estos ejemplos.

El archivo es editable; el diagrama documenta el diseño. Las restricciones reales se crean con el SQL, no dibujando las líneas.

## Ver las tablas desde psql

```psql
\dt nf3.*
\d nf3.empleados
```

`empleados_antes` queda para comparar y no se mantiene sincronizada.

**Para recordar:** el teléfono del departamento cambia en el departamento; los empleados lo consultan mediante su relación.

## Referencias para consultar

- [PostgreSQL: claves y restricciones](https://www.postgresql.org/docs/current/ddl-constraints.html).
- [PostgreSQL: consola psql](https://www.postgresql.org/docs/current/app-psql.html).
- [draw.io: abrir un diagrama](https://www.drawio.com/docs/manual/open-diagram-file/).


## Verificación del material

Los bloques SQL del ejercicio y sus soluciones se ejecutaron en PostgreSQL 18.3 mediante PGlite, y se comprobaron sus resultados. Los comandos de Docker y los metacomandos de psql son instrucciones para tu contenedor; no se ejecutaron contra tu instalación.
