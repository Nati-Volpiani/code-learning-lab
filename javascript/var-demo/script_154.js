const element = [SVGSetElement, 'element1', 'element2'];

for (let i = 0; i < 3; i++) {
    if (i !== 0) {
        console.log(element[i])
    }  else {
        SVGSetElement();
    }
}

function SVGSetElement() {
    let s = 10
    console.log(s);
}