// var name
//LINEA 5  uso una variable tipo var dentro de una funcion  sin declarar el identificador en el root
//LINEA 6 con return logro que consola muestre el valor asignado a name
function nombrar() {
    var name = 'von Gromann' 
    return name
}
//LINEA 12 creo otra variable con identific name
//  dentro de otro scope. no reasigna el valor de 
// var name porque al no declararla con un tipo de variable, 
// no interfiere con la que fue creada. Accede directamente al root

//LINEA 13 con if estoy preguntando si el valor de name es Volpiani
//LINEA 14 reasigno el valor de name
function repetir() {  
name = 'Volpiani' 
if(name==='Volpiani') {  
    name = 'Genia' 
    let apellido = 'Volpiani'
}
//LINEA 17 con return logro que la consola me muestre el valor , que es 'Genia' dentro de otro scope
//   apellido = 'von Gromann2'
console.log(apellido);
return apellido
}

//LINEA 23  mostrar en consola el valor asignado a identificador name dentro de la funcion nombrar 
//LINEA 24 estoy llamando a laa funcion y pidiendo que devuelva el valor asignado al identificador que vive dentro de la funcion
//LINEA 25 estoy reasignando el valor de name en el scope global (root)
//LINEA 26 solicito valor de name (va a imprimir el ultimo valor asignado aunque esté en el root) 
console.log(nombrar()); 
console.log(repetir()); 
name = 'Federico'
console.log(repetir());

