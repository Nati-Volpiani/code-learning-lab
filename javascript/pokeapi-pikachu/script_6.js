 //DELETE.V.02 (Borro sólo un elemento/recurso)
 
 
 const id = 5
 fetch("https://jsonplaceholder.typicode.com/posts/" + id, {
        method: "DELETE"
    })

    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => console.error(error));