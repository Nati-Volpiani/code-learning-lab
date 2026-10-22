//GET

const pokemonNames = ["pikachu", "bulbasaur", "charmander", "squirtle", "eevee"];

for (let i = 0; i <pokemonNames.length; i++) {
    const name = pokemonNames[i];

    fetch("https://pokeapi.co/api/v2/pokemon/" + name)
        .then(response => response.json())
        .then(data => {
            const title = document.getElementById("name-" + name);
            const image = document.getElementById("image-" + name);

            title.textContent = data.name;
            image.src = data.sprites.front_default;
        })
        .catch(error => console.error(error));
}