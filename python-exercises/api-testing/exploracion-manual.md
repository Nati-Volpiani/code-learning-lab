# Paso 1 – Exploración manual de la API

**Pedido:** GET https://rickandmortyapi.com/api/character/1

**Status code que vi:** 200 OK

| Campo   | Valor que viste | Tipo según la doc | ¿Coincide? |
|---------|-----------------|-------------------|------------|
| id      |        1        |       int         |    si      |
| name    |  Rick Sanchez   |         string    |        si  |
| status  |      Alive      |           string  |      si    |
| species |       Human     |         string    |          si|
| gender  |           Male  |          string   |          si|

# Paso 2 – Personaje que no existe

**Pedido:** GET https://rickandmortyapi.com/api/character/999999

**Status code que vi:** 

**Lo que mostró la response:** 

**¿La documentación dice qué debería pasar?:** 


