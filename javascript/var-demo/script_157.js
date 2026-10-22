//closure_recursion_PENDIENTE
let breakFunc = 0

function externa(nombre) {
    breakFunc++

    function interna(externa) {
        console.log(nombre);
        externa();
    }
    if (breakFunc === 3) {
        return
    }
    interna(externa);
}

externa('Natalia');

const funcNombres = [externa, 'Frida', 'Frida Kahlo'];

for (let i = 0; i < 3; i++) {
    if (i === 2) {
        console.log(funcNombres[i]);
    } else {
        console.log[i];
    }
}