const auto = [acelerar, frenar, 0, 50];

for (let i = 0; i < 4; i++) {
    if (i === 0 || i === 1) {
       auto[i]();                 //ejecuto las funciones en esas posiciones 0-1
       
    } else {
        console.log(auto[i]); //muestro el valor que hay en esa posición del array 0-50
    }
}



function acelerar() {
    let velocidad = 60
    console.log(velocidad);
}
function frenar() {
    let velocidad = 10
    console.log(velocidad);
}