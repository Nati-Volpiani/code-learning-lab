const array = [setFunc, 'string1', 'string2'];

for (let i = 0; i < 3; i++) {
    if (i !== 0) {
        console.log(array[i])
    } else {
        setFunc();
    }
}

function setFunc() {
    const f = 'function1'
    console.log(f);
}