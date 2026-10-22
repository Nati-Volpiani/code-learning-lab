
// creo una variable tipo const donde le asigno una funcion  
//la funcion puede ser llamada ahora con el nombre de la variable donde la guardé y puede recibir parametros
const saveValue = function drink(value) {

    return value

}

//creo una variable tipo let que puede ser reasignada en el scope creado que se llama mensaje
// la variable setValue tiene guardado adentro una funcion, por lo tanto la puedo ejecutar aplicando parentesis 
//y pasando un argumento, la funcion drink va a devolver el argumento con el return y se lo va a pasar a mensaje
// tener en cuenta el operador = que le esta asignando el  valor return a la variable mensaje 
 let mensaje = saveValue('coffee with milk')
console.log(mensaje);

