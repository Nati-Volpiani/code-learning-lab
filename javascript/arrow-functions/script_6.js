const ages = [8, 15, 22, 4, 30];

const olderThan10 = ages.filter((age) => {
    return age > 10
})

console.log(olderThan10);

const olderThan10n2 = ages.filter((age) => age > 10)

console.log(olderThan10n2);