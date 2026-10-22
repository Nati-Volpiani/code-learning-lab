function saludar() {
    console.log(nombre);
}
let nombre = 'Fede';
saludar();
// va a mostrar Fede.- porque aunque el 
// orden esta invertido, JS va a detectar
//  que la variable nombre fue declarada
//  con let nombre en el root. 

//orden de ejecucion JS
//Paso 1 → línea 1-3: JS guarda
//  la función saludar en memoria,
//  pero NO la ejecuta todavía

//Paso 2 → línea 4: JS declara nombre
//  y le asigna el valor 'Fede'

//Paso 3 → línea 5: JS llama a saludar() 
// — recién ACÁ entra al cuerpo de la función

//Paso 4 → línea 2: JS ejecuta console.
// log(nombre) → busca nombre → lo encuentra
// saludar con valor 'Fede' → imprime 'Fede'
