const users = [
  { id: 1, name: "Ana", age: 25 },
  { id: 2, name: "Luis", age: 17 },
  { id: 3, name: "Marta", age: 30 }
];

const isAdult = users.map(function(u){
    return u.age > 18
})

console.log(users);
console.log(isAdult);