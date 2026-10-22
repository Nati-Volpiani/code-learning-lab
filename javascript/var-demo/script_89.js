const saveCity = function (city) {

    return function setCity() {
        return city
    }

}

const result = saveCity('Madrid');
console.log(result());