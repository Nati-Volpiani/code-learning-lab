const getSquaresUpTo = function(n) {
    const squaresUpTo = [];
    let i = 1;
    while ( i <= n ) {
        squaresUpTo.push (i * i);
        i++;
    } 
    return squaresUpTo;
}

console.log(getSquaresUpTo(4));

// Expected: build an array of squares from 1 up to the given number
