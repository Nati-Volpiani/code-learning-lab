Usar Ctrl+Shift+v para verlo en forma de Documentos

# 1FN — Un dato por celda, sin listas escondidas

**Idea:** si necesitás tratar cada teléfono de un cliente por separado, guardá un teléfono por fila, no una lista de teléfonos dentro de una celda.

**Caso real:** una tienda quiere buscar clientes por teléfono, agregar teléfonos y quitar los que ya no se usan.

**Tiempo orientativo:** 20–30 minutos. Una persona ejecuta y la otra explica qué representa cada fila; después intercambian roles.

## El mapa de las cuatro formas normales

Normalizar es organizar los datos para que un mismo hecho no tenga que mantenerse en muchos lugares. Evita contradicciones al modificar, dificultades al agregar y pérdidas accidentales al borrar información. No significa eliminar toda repetición ni hacer una tabla por columna.

| Forma | Pregunta práctica                                                              | Ejemplo del taller                              |
| ----- | ------------------------------------------------------------------------------ | ----------------------------------------------- |
| 1FN   | ¿Estoy metiendo una lista de elementos en una celda?                           | Teléfonos de un cliente                         |
| 2FN   | ¿Un dato depende de solo una parte de una clave compuesta?                     | Nombre del producto repetido en pedidos         |
| 3FN   | ¿Estoy guardando aquí un dato que corresponde a otra entidad?                  | Teléfono del departamento repetido en empleados |
| 4FN   | ¿Estoy cruzando dos listas independientes y guardando todas sus combinaciones? | Idiomas y especialidades de un profesional      |

Las formas se acumulan: no alcanza con resolver 3FN si todavía hay un problema de 1FN. Entre 3FN y 4FN existe la forma de Boyce-Codd, una condición más exigente que 3FN. No es otro nombre para 4FN. Hay más formas normales; estos cuatro archivos cubren las numeradas de 1 a 4.

## Tres palabras para entender el SQL

- **PK / clave primaria:** identifica una fila sin repetirse. `PRIMARY KEY (cliente_id, telefono)` identifica la combinación de ambos valores.
- **FK / clave foránea:** vincula una fila con otra tabla. `REFERENCES clientes(cliente_id)` evita registrar un teléfono para un cliente inexistente.
- **NOT NULL:** exige que se informe un valor. `TEXT` guarda texto e `INTEGER` guarda enteros. Un teléfono es texto: puede tener `+`, ceros iniciales y no se usa para hacer cuentas.

Una PK también impide valores nulos en sus columnas. Ver varias filas con el mismo `cliente_id` en una tabla de teléfonos está bien: son diferentes teléfonos del mismo cliente.

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
DROP SCHEMA IF EXISTS nf1 CASCADE;
CREATE SCHEMA nf1;
SET search_path TO nf1;
```

## 2. Crear el diseño problemático

```sql
CREATE TABLE clientes_antes (
    cliente_id INTEGER PRIMARY KEY,
    nombre TEXT NOT NULL,
    telefonos TEXT NOT NULL
);

INSERT INTO clientes_antes VALUES
    (1, 'Ana', '3511111111,3512222222'),
    (2, 'Bruno', '3513333333');

SELECT * FROM clientes_antes ORDER BY cliente_id;
```

| cliente_id | nombre | telefonos             |
| ---------- | ------ | --------------------- |
| 1          | Ana    | 3511111111,3512222222 |
| 2          | Bruno  | 3513333333            |

**Problema observable:** busquemos al dueño del segundo teléfono de Ana.

```sql
SELECT cliente_id, nombre
FROM clientes_antes
WHERE telefonos = '3512222222';
```

**Resultado: cero filas.** La celda completa contiene dos teléfonos y no es igual al teléfono buscado. Podríamos partir el texto en cada consulta, pero también tendríamos que controlar separadores, espacios y duplicados al modificarlo.

Agregar `telefono_1`, `telefono_2`, `telefono_3` tampoco es una buena solución: fija un máximo y obliga a cambiar la estructura cuando aparece un cuarto teléfono.

## 3. Crear el diseño corregido y trasladar los datos

```sql
CREATE TABLE clientes (
    cliente_id INTEGER PRIMARY KEY,
    nombre TEXT NOT NULL
);

CREATE TABLE cliente_telefonos (
    cliente_id INTEGER NOT NULL REFERENCES clientes(cliente_id),
    telefono TEXT NOT NULL,
    PRIMARY KEY (cliente_id, telefono)
);

INSERT INTO clientes (cliente_id, nombre)
SELECT cliente_id, nombre FROM clientes_antes;

-- Paso de migración: convertir la lista vieja en filas individuales.
INSERT INTO cliente_telefonos (cliente_id, telefono)
SELECT c.cliente_id, trim(t.telefono)
FROM clientes_antes AS c
CROSS JOIN LATERAL unnest(string_to_array(c.telefonos, ',')) AS t(telefono);

SELECT * FROM cliente_telefonos ORDER BY cliente_id, telefono;
```

| cliente_id | telefono   |
| ---------- | ---------- |
| 1          | 3511111111 |
| 1          | 3512222222 |
| 2          | 3513333333 |

La migración divide el texto por comas y genera una fila por teléfono. `trim` quita espacios exteriores. La parte `CROSS JOIN LATERAL` permite hacer esa división para cada cliente. No hace falta memorizarla para aprender 1FN: solo convierte este ejemplo viejo; los nuevos teléfonos ya se insertarán individualmente. En una migración real, primero hay que revisar teléfonos vacíos, duplicados y formatos inconsistentes.

**¿Por qué dos tablas?** Una guarda quién es el cliente; la otra, cuáles son sus teléfonos. Si repitiéramos el nombre con cada teléfono, seguiríamos duplicando otro hecho. Además, un cliente puede existir sin teléfonos.

## 4. Consultar y agregar sin manipular listas

```sql
SELECT c.nombre, t.telefono
FROM clientes AS c
JOIN cliente_telefonos AS t ON t.cliente_id = c.cliente_id
WHERE t.telefono = '3512222222';
```

Resultado: `Ana | 3512222222`. `JOIN` une filas usando el identificador compartido; `c` y `t` son nombres cortos para las tablas.

```sql
INSERT INTO cliente_telefonos VALUES (1, '3514444444');

SELECT c.nombre, t.telefono
FROM clientes AS c
JOIN cliente_telefonos AS t ON t.cliente_id = c.cliente_id
ORDER BY c.cliente_id, t.telefono;
```

Ahora salen cuatro filas: tres de Ana y una de Bruno. Agregamos una fila, sin reescribir los teléfonos anteriores. La PK impide repetir un mismo teléfono **para el mismo cliente**. No prohíbe que dos clientes compartan un teléfono: esa es la regla elegida para este negocio.

## 5. ¿Cuándo usarla? ¿Qué no significa?

Aplicala cuando cada elemento se deba buscar, relacionar, validar o modificar individualmente: teléfonos, integrantes de un pedido, participantes de un evento.

En la enseñanza clásica, 1FN exige valores individuales del dominio elegido y ausencia de grupos repetidos. Aquí el valor individual es **un teléfono**, no una lista. PostgreSQL admite arrays y JSON; que permita guardarlos no significa que sean el modelo adecuado para relaciones que querés gestionar individualmente.

No significa partir toda cadena de texto: `nombre = 'Ana María'` puede ser un valor válido. Separar nombre y apellido depende de lo que la aplicación necesite hacer. Una coma en una dirección tampoco convierte por sí sola a esa dirección en una lista.

## 6. Desafío para resolver entre las dos personas

1. Agreguen a Carla, ID 3, sin teléfonos.
2. Agreguen el teléfono `3515555555` para Carla.
3. Eliminen únicamente `3511111111` de Ana.
4. Muestren todos los clientes con sus teléfonos.

Antes de mirar: ¿borrar un teléfono debería borrar al cliente? ¿Qué pasa si un cliente no tiene teléfonos?

### Solución — leer después de intentar

```sql
INSERT INTO clientes VALUES (3, 'Carla');
INSERT INTO cliente_telefonos VALUES (3, '3515555555');
DELETE FROM cliente_telefonos
WHERE cliente_id = 1 AND telefono = '3511111111';

SELECT c.nombre, t.telefono
FROM clientes AS c
LEFT JOIN cliente_telefonos AS t ON t.cliente_id = c.cliente_id
ORDER BY c.cliente_id, t.telefono;
```

Resultado final: Ana tiene `3512222222` y `3514444444`; Bruno, `3513333333`; Carla, `3515555555`. Son cuatro filas. `LEFT JOIN` conserva al cliente aunque no tenga teléfonos; en ese caso el teléfono sale como `NULL` (vacío por defecto en psql). Borrar una fila de teléfonos no borra al cliente.

## Representarlo en draw.io

Abrí [draw.io](https://app.diagrams.net/), elegí **Dispositivo / Device** si pregunta dónde trabajar y luego **Archivo → Abrir desde → Dispositivo** (`File → Open From → Device`). Abrí `01_forma_normal.drawio`, incluido junto a este Markdown. El diagrama tiene dos páginas: **Antes** y **Después**. Los nombres de tablas y columnas coinciden con el SQL.

En **Antes**, `telefonos` guarda la lista. En **Después**, `clientes` se conecta con `cliente_telefonos`. La PK de la segunda tabla es el par `(cliente_id, telefono)`.

Para dibujarlo ustedes: creen un rectángulo por tabla, escriban su nombre y columnas, marquen `PK` junto a la clave principal y `FK` junto a la columna que referencia otra tabla. Si la clave combina columnas, marquen todas con `PK` y aclaren que forman **una sola clave compuesta**. Unan la tabla principal con la tabla que la referencia y escriban `1 → 0..N`: una fila principal puede tener cero, una o muchas filas asociadas; cada fila asociada pertenece a exactamente una fila principal en estos ejemplos.

El archivo es editable; el diagrama documenta el diseño. Las restricciones reales se crean con el SQL, no dibujando las líneas.

## Comprobación visual desde psql

```psql
\dt nf1.*
\d nf1.cliente_telefonos
```

El primer comando lista tablas. El segundo muestra columnas, PK y FK. `clientes_antes` sigue existiendo para comparar: no está sincronizada con las nuevas tablas y no se usa para seguir cargando datos.

**Para recordar:** un cliente puede tener muchos teléfonos; cada teléfono asociado ocupa su propia fila.

## Referencias para consultar

- [PostgreSQL: claves y restricciones](https://www.postgresql.org/docs/current/ddl-constraints.html).
- [PostgreSQL: consola psql](https://www.postgresql.org/docs/current/app-psql.html).
- [draw.io: abrir un diagrama](https://www.drawio.com/docs/manual/open-diagram-file/).

## Verificación del material

Los bloques SQL del ejercicio y sus soluciones se ejecutaron en PostgreSQL 18.3 mediante PGlite, y se comprobaron sus resultados. Los comandos de Docker y los metacomandos de psql son instrucciones para tu contenedor; no se ejecutaron contra tu instalación.
