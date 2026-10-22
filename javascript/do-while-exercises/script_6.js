const colors = ["red", "green", "blue", "yellow", "red", "purple", "blue"];

let i = 0;

const colorsLength = colors.length

const selectedColors = []

do {

    if ( colors[i] === "red" || colors[i] === "blue" ) {

        selectedColors[selectedColors.length] = colors[i]
    }
    i++

} while ( i < colorsLength )

    console.log(selectedColors);














// Expected: keep colors that are "red" or "blue"