# QA Learning Lab

I am Natalia Volpiani, a Junior QA Engineer. I use this repository to document my programming and database practice as I build foundations for API testing and future test automation.

Here I collect guided exercises, personal practice, and learning notes. I am continuing to develop these skills; my API testing practice is at an early stage, and I have not yet built an automated QA test suite in this repository.

## Explore the repository

| Area | Contents | Start here |
| --- | --- | --- |
| PostgreSQL | Normalization from 1NF to 4NF, database snapshots, keys, constraints, and diagrams | [SQL practice](sql/) |
| Python | Variables, functions, lists, dictionaries, and introductory classes | [Python basics](python/basics/) |
| API exploration | A Python GET request and manual response observations | [API practice](python/api-testing/) |
| JavaScript | Functions, scope, loops, array methods, browser interactions, and HTTP request examples | [JavaScript practice](javascript/) |

## PostgreSQL normalization

In these four guided exercises, I practiced comparing an initial design with a normalized design:

| Form | Example | Database snapshot | Guide |
| --- | --- | --- | --- |
| 1NF | Customers and individual phone numbers | [01_normal_form.sql](sql/01_normal_form.sql) | [1NF guide](sql/docs/01_forma_normal.md) |
| 2NF | Orders, products, and order items | [02_normal_form.sql](sql/02_normal_form.sql) | [2NF guide](sql/docs/02_forma_normal.md) |
| 3NF | Employees and departments | [03_normal_form.sql](sql/03_normal_form.sql) | [3NF guide](sql/docs/03_forma_normal.md) |
| 4NF | Independent professional languages and specialties | [04_normal_form.sql](sql/04_normal_form.sql) | [4NF guide](sql/docs/04_forma_normal.md) |

The SQL files are `pg_dump` snapshots containing table definitions, sample data, and constraints. They preserve the resulting database state; they are not a history of every SQL command used during the exercises.

The guides are in Spanish and use Spanish identifiers. The exported databases use English identifiers. Available diagrams are PNG files in [sql/diagrams](sql/diagrams/); the editable `.drawio` files mentioned in the guides are not included.

### Restore the snapshots

Use a local PostgreSQL practice instance and a compatible `psql` client. The snapshots were exported with PostgreSQL and `pg_dump` 17.11. Run these commands from the repository root, with your PostgreSQL connection configured:

```bash
createdb qa_learning_lab
psql -X -v ON_ERROR_STOP=1 -d qa_learning_lab -f sql/01_normal_form.sql
psql -X -v ON_ERROR_STOP=1 -d qa_learning_lab -f sql/02_normal_form.sql
psql -X -v ON_ERROR_STOP=1 -d qa_learning_lab -f sql/03_normal_form.sql
psql -X -v ON_ERROR_STOP=1 -d qa_learning_lab -f sql/04_normal_form.sql
```

Use a new, empty database: the dumps create schemas `nf1` through `nf4` and are not designed for repeated imports into those existing schemas.

## Python and initial API exploration

Run individual fundamentals exercises with Python 3:

```bash
python3 python/basics/script_3.py
```

I started my Python API practice with a [GET request](python/api-testing/first_request.py) that uses `requests` to fetch a Rick and Morty character and print the HTTP status code. To run it in a virtual environment:

```bash
python3 -m venv python/api-testing/.venv
python/api-testing/.venv/bin/python -m pip install requests
python/api-testing/.venv/bin/python python/api-testing/first_request.py
```

Internet access is required. [Manual exploration notes](python/api-testing/exploracion-manual.md) record observations about a successful response. The nonexistent-character scenario is still unfinished. The script currently has no assertions, request timeout, or error handling.

## JavaScript practice

I practice arrow functions, `while` and `do...while`, `map`, `filter`, `push`, `pop`, `reduce`, closures, and variable scope. For a console exercise, use Node.js:

```bash
node javascript/pop-push-reduce/script_20.js
```

The final printed value in this example should be `17`.

Browser exercises use HTML and the DOM. The [Pokémon page](javascript/pokeapi-pikachu/index.html) fetches Pokémon data and images; it requires a browser and internet access. Other files include HTTP method examples using JSONPlaceholder.

The `var-demo-variants` directory preserves a separate practice version from the original `vardemo2` branch. Some scope and declaration examples intentionally reproduce JavaScript errors and include the observed error in comments.

## Review status — October 22, 2026

- All nine Python basics scripts ran without exceptions during this review. Comments describing expected output still need to be checked against the complete output.
- All ten Python files passed syntax parsing. The API request was not executed during this review.
- Of 347 JavaScript files, 338 passed a Node.js syntax check and nine failed because of repeated declarations. Some failures are documented error demonstrations. Five files are blank placeholders, included in the total.
- JavaScript syntax checks do not establish functional correctness. Browser behavior, live API responses, and SQL restoration were not tested in this review.

Next improvements: distinguish completed exercises from error demonstrations and placeholders; finish positive and negative API scenarios; add reproducible dependencies and automated assertions; and update the SQL guide references.

## Learning sources and attribution

This repository contains my solutions to the exercises I completed during guided practice, together with my practice code, SQL database snapshots, and diagrams. The original SQL learning guides were provided by Federico ([fvgtekken](https://github.com/fvgtekken)) through [python-sql-tutorial](https://github.com/fvgtekken/python-sql-tutorial).
