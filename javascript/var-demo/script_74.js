function sayHello() {
    let name = 'Natalia'
    return function sayGoodBye() {
            console.log('bye')
            return name
    }

}



let setFunc = sayHello();
console.log(setFunc)
console.log(setFunc());
