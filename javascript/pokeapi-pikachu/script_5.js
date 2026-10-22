//DELETE

const pokemonNames = ["pikachu", "bulbasaur", "charmander", "squirtle", "eevee"];


for (let i = 0; i < pokemonNames.length; i++ ) {
    const name = pokemonNames[i];
    const id = i + 1;

    fetch("https://jsonplaceholder.typicode.com/posts/" + id, {
        method: "DELETE"
    })

    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => console.error(error));
}

//respuesta del servidor:
//{}
//{}
//{}
//{}
//{}
