const names = ["Ana", "Bruno"];

const users = names.map((n) => ({ name: n, active: true}));

console.log(users);

// Expected: users returns [{name: 'Ana', active: true}, {name: 'Bruno', active: true}]


const users2 = names.map((n) => {
   return {name: n, active: true}
});

console.log(users2);