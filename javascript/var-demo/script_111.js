const numero = 6

function duplicar() {
    const numero = 12 // shadowing
    console.log(numero); 
}

duplicar();
console.log(numero);


