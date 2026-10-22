const usernames = ["admin", "user1", "guest", "admin", "user2", "test"];

const excludeUsernames = usernames.filter(function(u){
    return u !== "admin" && u !== "guest"
})

console.log(excludeUsernames);
console.log(usernames);