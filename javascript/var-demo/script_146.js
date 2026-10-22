const fruits = ['banana', 'kiwi', 'mango', 'pera']


for (let i = 0; i < 4; i++) {
    if (fruits[i] === 'pera') {
        break;
    }
    
    console.log(fruits[i]);

}



function checkFruit(kiwi) {
    let message = 'no se cumple la condición'
    if (fruits.length === 4 && (kiwi === 'banana' || kiwi !== 'kiwi')) {
        console.log('fruta permitida')
    } else {
        console.log(message)
    }



}


checkFruit(fruits[1]);