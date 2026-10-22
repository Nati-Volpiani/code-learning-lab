function getCity() {
    let city = 'Tokyo'
    return function showCity() {
        return city
    }
}

const myCity = getCity();
console.log(myCity());