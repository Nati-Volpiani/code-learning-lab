function saludar() {
    console.log(nombre);
}
saludar();
let nombre = 'Fede';

// Lo que importa no es dónde está escrita
//  la línea en el archivo, sino cuándo JS la ejecuta. 
// Si la función se llama después de que la variable 
// fue inicializada, no hay error — aunque
//  la función esté escrita antes en el archivo.