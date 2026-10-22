const velocidad = [acelerar, 90, 100];

for (let i = 0; i < 3; i++) {
    if (i === 0) {
        acelerar()
    } else {
        console.log(velocidad[i]);
    }
}

function acelerar() {
    let select = 'velocidadMedia'
    console.log(select);
}