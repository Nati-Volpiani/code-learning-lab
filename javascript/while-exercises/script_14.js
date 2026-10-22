const users = [

    { id: 1, name: "Bob" },
    { id: 2, name: "Alexandra" },
    { id: 3, name: "Sam" },
    { id: 4, name: "Christopher" },
    { id: 5, name: "Eve" }
]

let i = 0;

const usersLength = users.length

const longNameUsers = []

while (i < usersLength) {

    if (users[i].name.length > 4) {

        longNameUsers[longNameUsers.length] = users[i]

    }

    i++

}

console.log(longNameUsers);