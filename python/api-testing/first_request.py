import requests

my_first_request = requests.get("https://rickandmortyapi.com/api/character/1")



print(my_first_request.status_code)