const numbers = [4, 7, 10];

const tripled = numbers.map((n) => n * 3)

console.log(tripled);

// Expected: tripled returns [12, 21, 30]


const tripled2 =  numbers.map((n) => {
    return n * 3
})

console.log(tripled2);