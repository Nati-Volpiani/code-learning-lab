const instruments = [
    { id: 1, name: "Piano" },
    { id: 2, name: "Guitar" },
    { id: 3, name: "Drums" },
    { id: 4, name: "Guitar" },
    { id: 5, name: "Violin" },
];
 let i = 0;

 const instrumentsLength = instruments.length

 const selectedInstruments = []

 while (i < instrumentsLength) {
    if(instruments[i].name === "Guitar" || instruments[i].name === "Violin") {
        selectedInstruments[selectedInstruments.length] = instruments[i]
    }
    i++
 }

 console.log(selectedInstruments);