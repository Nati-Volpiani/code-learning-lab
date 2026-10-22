function mostrar() { 
    console.log(numero);
    let numero = 10;
}

mostrar();
// mi respuesta --> error porque esta tratando de mostrar 
// en consola una variable que aún no fue declarada
//consola --> script_16.js:2 Uncaught ReferenceError: 
// Cannot access 'numero' before initialization
   // at mostrar (script_16.js:2:17)
  //  at script_16.js:6:1
  // es como si fuera un scanner del error , que detalla como
  //  se hizo para llegar hasta el error , en secuencia

  //Claudica me enseñó algo nuevo --> "El stack trace
  //  es el registro de la secuencia de pasos que siguió 
  // JS para llegar al error." en referencia a lo siguiente
  //que es lo que me tiro a consola
   // at mostrar (script_16.js:2:17)
  //  at script_16.js:6:1