const companies = ['Alphabet', 'Apple', 'Microsoft', 'Meta', 'Oracle']

const keepWork = work(companies);

const keepValue = keepWork()
console.log(keepValue);

function work(companies) {
    let index = 0
    const indexValue = companies[index]
    return function playWork() {
        console.log(indexValue);
        if (indexValue === 'Alphabet') {
            return 'si, es Alphabet'
        }
        if (indexValue !== 'Meta') {
            return 'no es Meta, se cumple la condición'
            return 'no voy a ver estos dos últimos return'
        }
    }
}

//open()

const open = function() {
    console.log('error');
}
open()