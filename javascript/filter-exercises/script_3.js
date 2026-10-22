const temperatures = [-5, 3, 0, -12, 8, -1, 20];


const negativeTemperatures = temperatures.filter(function(t)
{ return t < 0;
})

console.log(negativeTemperatures);
console.log(temperatures);