const prices = [15, 8, 22, 3, 10];


let i = 0

const pricesLength = prices.length
let total = 0
while (i < pricesLength) {
    total = total + prices[i]
    console.log(prices[i])
    i++
}   console.log(total);