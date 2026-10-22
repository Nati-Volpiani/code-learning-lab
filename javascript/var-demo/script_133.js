listen()

function listen() {
    console.log('learn')
}

const options = ['JavaScript', 'Phyton', 'CSS', 'html']

function learnLanguage(options) {
    let index = 0
    const value = options[index]
    return function playLearn() {
        console.log(value)

        if (value === 'JavaScript') {
return 'si es JavaScript, se cumple la condición'
        }
        if (value !== 'CSS') {
            return 'no es CSS, se cumple la condición,  pero este return no vale'
            return 'este return tampoco vale'
        }
    }
}

const keepFunc = learnLanguage(options);
const keepFuncValue = keepFunc()
console.log(keepFuncValue)
