const arrayPaises = ['Argentina', 'Brasil','Chile','Peru']

const verificar = function(arrayPaises) {
    if (arrayPaises[2] === 'Chile') { //true
        console.log(arrayPaises[2]) // consola chile
        return arrayPaises[0] 
    }
}

const resultado = verificar(arrayPaises)
console.log(resultado); // consola 'Argentina'
console.log(arrayPaises[3]); //consola 'Peru'



