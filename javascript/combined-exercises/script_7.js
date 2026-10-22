const getCubesUpTo = function (n) {
    const cubesUpTo = [];
    let i = 1;
    do {

        cubesUpTo.push(i * i * i)
        i++
    } while (i <= n)
    return cubesUpTo
}

console.log(getCubesUpTo(3));

// Expected: build an array of cubes from 1 up to the given number
