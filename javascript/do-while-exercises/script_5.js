const numbers = [5, 12, 18, 25, 9, 30, 15];

let i = 0;

const numbersLength = numbers.length

const selectedNumbers = []

do {

if ( numbers[i] > 10 && numbers[i] < 20) {

    selectedNumbers[selectedNumbers.length] = numbers[i]
}
i++

} while ( i < numbersLength )

    console.log(selectedNumbers);

// Expected: keep numbers greater than 10 and less than 20














