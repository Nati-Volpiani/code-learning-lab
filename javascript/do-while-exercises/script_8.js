const usernames = ["admin", "user1", "guest", "admin", "user2", "test"];

let i = 0;

const usernamesLength = usernames.length

const excludeUsernames = []

do {

    if ( usernames[i] !== "admin" && usernames[i] !== "guest" ) {

        excludeUsernames[excludeUsernames.length] = usernames[i]
    }
    i++
} while ( i < usernamesLength);

console.log(excludeUsernames);

// Expected: exclude "admin" and "guest"
