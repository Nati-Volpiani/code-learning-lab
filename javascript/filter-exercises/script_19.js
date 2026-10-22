const instruments = [
    { id: 1, name: "Piano" },
    { id: 2, name: "Guitar" },
    { id: 3, name: "Drums" },
    { id: 4, name: "Guitar" },
    { id: 5, name: "Violin" }
];

const selectedInstruments = instruments.filter(function(i){
    return i.name === "Guitar" || i.name === "Violin"
})

console.log(selectedInstruments);
console.log(instruments);