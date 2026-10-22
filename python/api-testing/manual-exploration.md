# Step 1 – Manual API exploration

**Request:** GET https://rickandmortyapi.com/api/character/1

**Status code I saw:** 200 OK

| Field   | Value I saw     | Type according to the docs | Match? |
|---------|-----------------|----------------------------|--------|
| id      | 1               | int                        | yes    |
| name    | Rick Sanchez    | string                     | yes    |
| status  | Alive           | string                     | yes    |
| species | Human           | string                     | yes    |
| gender  | Male            | string                     | yes    |

# Step 2 – Character that does not exist

**Request:** GET https://rickandmortyapi.com/api/character/999999

**Status code I saw:** 

**What the response showed:** 

**Does the documentation say what should happen?:** 
