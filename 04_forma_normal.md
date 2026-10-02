# 4FN — Separar listas independientes para no multiplicar combinaciones

**Idea:** si una profesional tiene varios idiomas y varias especialidades independientes, guardá cada lista por separado. No guardes una fila por cada combinación idioma–especialidad.

**Caso real:** un directorio profesional registra en qué idiomas atiende cada persona y qué especialidades ofrece.

**Tiempo orientativo:** 25–35 minutos. Es independiente de los otros ejercicios.

## La condición que hace válido este ejemplo

Ana habla Español e Inglés y ofrece Diseño y Fotografía. **En este negocio puede ofrecer cualquiera de sus especialidades en cualquiera de sus idiomas.** Las listas son independientes.

La tabla inicial guarda únicamente `(profesional_id, idioma, especialidad)`, con las tres columnas como clave compuesta. No hay un idioma único ni una especialidad única por profesional. Tampoco guardamos el nombre profesional repetido en esa tabla: está separado desde el comienzo.

Bajo esas reglas, la tabla inicial puede cumplir 1FN, 2FN, 3FN e incluso Boyce-Codd. Aun así, falla en 4FN porque obliga a repetir todas las combinaciones entre dos listas independientes.

**Boyce-Codd y 4FN son distintas:** Boyce-Codd exige que quien determina funcionalmente otros datos identifique la fila. 4FN también contempla dependencias de múltiples valores independientes. Formalmente, toda dependencia multivaluada no trivial debe partir de una superclave. En este caso `profesional_id` determina la lista de idiomas independientemente de las especialidades, pero no identifica una fila de la tabla triple. No hace falta memorizar esa formulación para resolver el ejercicio.

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
DROP SCHEMA IF EXISTS nf4 CASCADE;
CREATE SCHEMA nf4;
SET search_path TO nf4;
```

## 2. Crear las cuatro combinaciones iniciales

```sql
CREATE TABLE profesionales (
    profesional_id INTEGER PRIMARY KEY,
    nombre TEXT NOT NULL
);

INSERT INTO profesionales VALUES (1, 'Ana');

CREATE TABLE perfil_antes (
    profesional_id INTEGER NOT NULL REFERENCES profesionales(profesional_id),
    idioma TEXT NOT NULL,
    especialidad TEXT NOT NULL,
    PRIMARY KEY (profesional_id, idioma, especialidad)
);

INSERT INTO perfil_antes VALUES
    (1, 'Español', 'Diseño'),
    (1, 'Español', 'Fotografía'),
    (1, 'Inglés', 'Diseño'),
    (1, 'Inglés', 'Fotografía');

SELECT * FROM perfil_antes ORDER BY idioma, especialidad;
SELECT count(*) AS filas FROM perfil_antes;
```

| profesional_id | idioma  | especialidad |
| -------------- | ------- | ------------ |
| 1              | Español | Diseño       |
| 1              | Español | Fotografía   |
| 1              | Inglés  | Diseño       |
| 1              | Inglés  | Fotografía   |

Resultado del conteo: **4**. Hay dos idiomas y dos especialidades: `2 × 2 = 4` filas. El orden de textos con acentos puede variar según la configuración regional de la base; el contenido y los conteos son los mismos.

## 3. ¿Qué pasa cuando Ana incorpora Portugués?

```sql
BEGIN;

INSERT INTO perfil_antes VALUES (1, 'Portugués', 'Diseño');

SELECT idioma, especialidad
FROM perfil_antes
WHERE idioma = 'Portugués';

SELECT count(*) AS filas FROM perfil_antes;

ROLLBACK;
```

Aparece `Portugués | Diseño` y el total es **5**. Pero según nuestras reglas Ana también ofrece Fotografía en Portugués. Falta esa combinación. Para representar correctamente un solo idioma nuevo tendríamos que insertar **dos filas**. Con 20 especialidades serían 20 filas.

La PK acepta este estado incompleto: evita repetir una combinación, pero no exige que estén todas. `ROLLBACK` elimina el Portugués de prueba y nos devuelve a las cuatro filas iniciales.

Si una persona tuviera idiomas registrados y ninguna especialidad todavía, la tabla triple tampoco permitiría guardar solo esos idiomas: la PK obliga a informar las tres columnas.

## 4. Guardar cada lista una sola vez

```sql
CREATE TABLE profesional_idiomas (
    profesional_id INTEGER NOT NULL REFERENCES profesionales(profesional_id),
    idioma TEXT NOT NULL,
    PRIMARY KEY (profesional_id, idioma)
);

CREATE TABLE profesional_especialidades (
    profesional_id INTEGER NOT NULL REFERENCES profesionales(profesional_id),
    especialidad TEXT NOT NULL,
    PRIMARY KEY (profesional_id, especialidad)
);

INSERT INTO profesional_idiomas
SELECT DISTINCT profesional_id, idioma FROM perfil_antes;

INSERT INTO profesional_especialidades
SELECT DISTINCT profesional_id, especialidad FROM perfil_antes;

SELECT * FROM profesional_idiomas ORDER BY profesional_id, idioma;
SELECT * FROM profesional_especialidades ORDER BY profesional_id, especialidad;
```

La primera tabla tiene **2 filas**: Español e Inglés para Ana. La segunda también tiene **2 filas**: Diseño y Fotografía para Ana.

Ahora agregamos Portugués:

```sql
INSERT INTO profesional_idiomas VALUES (1, 'Portugués');

SELECT
    (SELECT count(*) FROM profesional_idiomas WHERE profesional_id = 1) AS idiomas,
    (SELECT count(*) FROM profesional_especialidades WHERE profesional_id = 1) AS especialidades;
```

Resultado: `3 | 2`. Insertamos una sola fila y no tocamos las especialidades. Para los dos conjuntos guardamos `3 + 2 = 5` filas, en lugar de `3 × 2 = 6` combinaciones. Esto no cuenta la fila principal de Ana, que existe en ambos diseños.

La ventaja no es solo ahorrar espacio: podemos cambiar una lista sin mantener las combinaciones con la otra.

## 5. Consultar las listas o reconstruir las combinaciones

Para mostrar los idiomas:

```sql
SELECT p.nombre, i.idioma
FROM profesionales AS p
JOIN profesional_idiomas AS i ON i.profesional_id = p.profesional_id
ORDER BY p.profesional_id, i.idioma;
```

Resultado: Ana con Español, Inglés y Portugués, en tres filas.

Si un informe realmente necesita **todas las combinaciones**, puede calcularlas:

```sql
SELECT p.nombre, i.idioma, e.especialidad
FROM profesionales AS p
JOIN profesional_idiomas AS i ON i.profesional_id = p.profesional_id
JOIN profesional_especialidades AS e ON e.profesional_id = p.profesional_id
ORDER BY p.profesional_id, i.idioma, e.especialidad;
```

Resultado: **6 filas** para Ana: cada uno de los tres idiomas con Diseño y con Fotografía. El `JOIN` reconstruye las combinaciones cuando hacen falta; no las almacenamos. Antes de agregar Portugués, el mismo JOIN reconstruía exactamente las cuatro combinaciones originales.

Cuidado al contar idiomas después de ese JOIN: cada idioma aparecerá dos veces, una por especialidad. Para contar idiomas, consultá `profesional_idiomas` directamente. Normalizar las tablas no evita errores en una consulta mal planteada.

## 6. ¿Cuándo usarla y cuándo NO separar de esta forma?

Usala cuando haya dos conjuntos de valores realmente independientes de una misma entidad: idiomas y especialidades en este ejemplo, o habilidades y medios de contacto si el negocio los trata de forma independiente.

**Contraejemplo esencial:** Ana ofrece Diseño solo en Español y Fotografía solo en Inglés. Aquí el idioma depende de la especialidad ofrecida; cada pareja comunica una restricción real. Si separás las listas y las volvés a unir por persona, inventás Diseño en Inglés y Fotografía en Español. En ese negocio hay que conservar las combinaciones válidas en una relación triple.

**La independencia la define el negocio, no la apariencia de unas pocas filas.** No alcanza con ver tres columnas o una PK compuesta para decidir una separación de 4FN. En los datos del contraejemplo, la dependencia multivaluada usada para justificar nuestra separación ya no se cumple.

Tampoco es obligatorio crear tablas de catálogo `idiomas` y `especialidades` para mostrar 4FN. Podrían ser útiles si necesitáramos códigos estables, traducciones o atributos propios, pero aquí usamos texto para mantener el ejercicio corto.

## 7. Desafío para resolver entre las dos personas

Partiendo de Ana con tres idiomas y dos especialidades:

1. Agreguen la especialidad Ilustración con un solo `INSERT`.
2. Cuenten idiomas y especialidades por separado.
3. Cuenten las combinaciones que produciría el JOIN.
4. Antes de ejecutar: ¿deberían ser 6 o 9 combinaciones? ¿Cuántas filas guardamos entre las dos listas?

### Solución — leer después de intentar

```sql
INSERT INTO profesional_especialidades VALUES (1, 'Ilustración');

SELECT
    (SELECT count(*) FROM profesional_idiomas WHERE profesional_id = 1) AS idiomas,
    (SELECT count(*) FROM profesional_especialidades WHERE profesional_id = 1) AS especialidades;

SELECT count(*) AS combinaciones
FROM profesional_idiomas AS i
JOIN profesional_especialidades AS e ON e.profesional_id = i.profesional_id
WHERE i.profesional_id = 1;
```

Resultados: `3 | 3` y **9** combinaciones. Guardamos **6 filas** entre las dos listas; el informe puede producir `3 × 3 = 9` filas sin almacenarlas.

## Representarlo en draw.io

Abrí [draw.io](https://app.diagrams.net/), elegí **Dispositivo / Device** si pregunta dónde trabajar y luego **Archivo → Abrir desde → Dispositivo** (`File → Open From → Device`). Abrí `04_forma_normal.drawio`, incluido junto a este Markdown. El diagrama tiene dos páginas: **Antes** y **Después**. Los nombres de tablas y columnas coinciden con el SQL.

En **Antes**, `profesionales` se conecta con `perfil_antes`, cuya PK son las tres columnas. En **Después**, `profesionales` se conecta por separado con `profesional_idiomas` y `profesional_especialidades`. No dibujen una relación directa entre idioma y especialidad: en este negocio son listas independientes.

Para dibujarlo ustedes: creen un rectángulo por tabla, escriban su nombre y columnas, marquen `PK` junto a la clave principal y `FK` junto a la columna que referencia otra tabla. Si la clave combina columnas, marquen todas con `PK` y aclaren que forman **una sola clave compuesta**. Unan la tabla principal con la tabla que la referencia y escriban `1 → 0..N`: una fila principal puede tener cero, una o muchas filas asociadas; cada fila asociada pertenece a exactamente una fila principal en estos ejemplos.

El archivo es editable; el diagrama documenta el diseño. Las restricciones reales se crean con el SQL, no dibujando las líneas.

## Ver el diseño desde psql

```psql
\dt nf4.*
\d nf4.profesional_idiomas
\d nf4.profesional_especialidades
```

`perfil_antes` queda como comparación y no se mantiene sincronizada.

## Repaso final de las cuatro reglas

| Regla | Error que practicamos                                | Solución                                         |
| ----- | ---------------------------------------------------- | ------------------------------------------------ |
| 1FN   | Lista de teléfonos en una celda                      | Una fila por teléfono asociado                   |
| 2FN   | Nombre del producto dependiente de parte de la clave | Separar producto e ítem del pedido               |
| 3FN   | Datos del departamento copiados en empleados         | Separar departamento y empleado                  |
| 4FN   | Cruce almacenado de dos listas independientes        | Separar idiomas y especialidades por profesional |

Normalizar busca consistencia; no garantiza que toda consulta sea más rápida. Primero representen correctamente los hechos. Si luego un problema medido exige guardar datos derivados o repetidos para acelerar una lectura, documenten cómo se mantendrán consistentes.

**Para recordar:** separar dos listas independientes evita mantener todas sus combinaciones. Si las combinaciones expresan restricciones reales, no las elimines.

## Referencias para consultar

- [PostgreSQL: claves y restricciones](https://www.postgresql.org/docs/current/ddl-constraints.html).
- [PostgreSQL: consola psql](https://www.postgresql.org/docs/current/app-psql.html).
- [draw.io: abrir un diagrama](https://www.drawio.com/docs/manual/open-diagram-file/).

- [Gordon College: apuntes de normalización, sección de 4FN](https://www.cs.gordon.edu/courses/cs352/lectures-2017/Database%20Normalization.pdf).

## Verificación del material

Los bloques SQL del ejercicio y sus soluciones se ejecutaron en PostgreSQL 18.3 mediante PGlite, y se comprobaron sus resultados. Los comandos de Docker y los metacomandos de psql son instrucciones para tu contenedor; no se ejecutaron contra tu instalación.
