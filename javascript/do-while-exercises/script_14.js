const users = [
    { id: 1, name: "Bob" },
    { id: 2, name: "Alexandra" },
    { id: 3, name: "Sam" },
    { id: 4, name: "Christopher" },
    { id: 5, name: "Eve" }
];

let i = 0;

const usersLength = users.length

const longUsers = []

do {

    if ( users[i].name.length > 4 ) {

        longUsers[longUsers.length] = users[i]
    }
    i++
} while ( i < usersLength );

console.log(longUsers);

// Expected: keep users whose name length is greater than 4