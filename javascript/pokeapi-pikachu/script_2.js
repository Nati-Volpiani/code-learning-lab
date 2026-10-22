//POST

const pokemonNames = ["pikachu", "bulbasaur", "charmander", "squirtle", "eevee"];

for (let i = 0; i < pokemonNames.length; i++) {
    const name = pokemonNames[i];

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: name })
    })

        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => console.error(error));
}

//en terminal:
//node script_2.js
//title: 'charmander', id: 101 }
//{ title: 'squirtle', id: 101 }
//{ title: 'pikachu', id: 101 }
//{ title: 'eevee', id: 101 }
//{ title: 'bulbasaur', id: 101 }