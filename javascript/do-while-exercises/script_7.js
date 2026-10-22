const isActive = [true, false, true, true, false, false, true];

let i = 0;

const isActiveLength = isActive.length

const selectedIsActive = []

do {

    if (isActive[i] === true) {

        selectedIsActive[selectedIsActive.length] = isActive[i]
    }
    i++

} while (i < isActiveLength)

console.log(selectedIsActive);



















// Expected: keep only true values