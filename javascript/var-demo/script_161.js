const car = ['clio', 'sandero', 'logan', 'duster', 'kangoo'];

function showCar(carElements, carString) {

    let saveElements = 'save the element'
    let savePosition = 'save the position'
    const carLength = carElements.length

    for (let i = 0; i < carLength; i++) {
        if (car[i] === carString) {
            saveElements = car[i]
            savePosition = i
            break;
        }
    }
    return [saveElements, savePosition];
}

const [valorEnPosicion0, valorEnPosicion1] = showCar(car, 'kangoo');
console.log('si existe el elemento', valorEnPosicion0);
console.log('si existe la posición', valorEnPosicion1);

