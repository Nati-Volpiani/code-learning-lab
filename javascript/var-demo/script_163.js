const stockIndices = ['S&P 500', 'NASDAQ', 'Dow Jones', 'Nikkei 225', 'FTSE 100'];


function findIndex(indexName1, indexName2) {

    let foundName = 'índice no encontrado'
    let foundPosition = 'undefined'

    const stockIndicesLength = stockIndices.length

    for (let i = 0; i < stockIndicesLength; i++) {
        if (stockIndices[i] === indexName1 && stockIndices[i] !== indexName2) {
            foundName = stockIndices[i];
            foundPosition = i
        }
    }
    
    return [foundName, foundPosition];
}

const [name, position] = findIndex('S&P 500', 'NASDAQ');
console.log(name, 'se cumplió la condición');
console.log(position, 'también de cumple la condición');