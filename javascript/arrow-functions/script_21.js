const items = ["pen", "notebook", "eraser", "pencil case"];

const isShort = (item) => {
    return item.length <= 5
};

const shortItems = items.filter(isShort);

console.log(shortItems);

//Expected: shortItems returns ["pen"]

const isShort2 = (item) => item.length <= 5

const shortItems2 = items.filter(isShort2);

console.log(shortItems2);

