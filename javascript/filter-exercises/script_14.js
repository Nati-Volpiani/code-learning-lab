const users = [
    { id: 1, name: "Bob" },
    { id: 2, name: "Alexandra" },
    { id: 3, name: "Sam" },
    { id: 4, name: "Christopher" },
    { id: 5, name: "Eve" }
];

const moreThan4Letters = users.filter(function(u){
    return u.name.length > 4
})

console.log(moreThan4Letters);
console.log(users);