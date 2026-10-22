//PATCH

const pokemonNames = ["pikachu", "bulbasaur", "charmander", "squirtle", "eevee"];

for (let i = 0; i < pokemonNames.length; i++) {
    const name = pokemonNames[i];
    const id = i + 1;

    fetch("https://jsonplaceholder.typicode.com/posts/" + id, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: name })
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => console.error(error));
}



//{
// userId: 1,
//id: 4,
//title: 'squirtle',
//body: 'ullam et saepe reiciendis voluptatem adipisci\n' +
//'sit amet autem assumenda provident rerum culpa\n' +
//'quis hic commodi nesciunt rem tenetur doloremque ipsam iure\n' +
//'quis sunt voluptatem rerum illo velit'
//}
//{
//userId: 1,
// id: 3,
// title: 'charmander',
// body: 'et iusto sed quo iure\n' +
//   'voluptatem occaecati omnis eligendi aut ad\n' +
//   'voluptatem doloribus vel accusantium quis pariatur\n' +
//   'molestiae porro eius odio et labore et velit aut'
//}
//{
// userId: 1,
// id: 2,
//title: 'bulbasaur',
// body: 'est rerum tempore vitae\n' +
//  'sequi sint nihil reprehenderit dolor beatae ea dolores neque\n' +
//  'fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\n' +
//  'qui aperiam non debitis possimus qui neque nisi nulla'
//}
//{
// userId: 1,
//id: 5,
//title: 'eevee',
//body: 'repudiandae veniam quaerat sunt sed\n' +
//  'alias aut fugiat sit autem sed est\n' +
//  'voluptatem omnis possimus esse voluptatibus quis\n' +
//  'est aut tenetur dolor neque'
//}
//{
//userId: 1,
//id: 1,
//title: 'pikachu',
// body: 'quia et suscipit\n' +
// 'suscipit recusandae consequuntur expedita et cum\n' +
//'reprehenderit molestiae ut ut quas totam\n' +
//'nostrum rerum est autem sunt rem eveniet architecto'
//}
