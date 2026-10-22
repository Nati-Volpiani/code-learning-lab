function eat(mixed) {
    let select = 'pear'
    console.log(select)
}

const mixed = ['fruits', 2, eat];

for (let i = 0; i < mixed.length; i++) {
    if(i === 2) {
    eat();
    } else {
    console.log(mixed[i])
    }
}
