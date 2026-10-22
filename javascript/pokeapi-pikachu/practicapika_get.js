fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(respuesta => respuesta.json())
    .then(datos => {
        const imagen = document.getElementById("imagen-pikachu");
        imagen.src = datos.sprites.front_default;
    })
    
    .catch(error => console.error(error));
    
