const messages = [
  { sender: "Ana", words: 12 },
  { sender: "Luis", words: 8 },
  { sender: "Ana", words: 5 },
];

const anaMessages = messages.filter(function(m) {
    return m.sender === "Ana"
})

const totalTold = anaMessages.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.words
},0); // >> ,0); >> initialValue

console.log(anaMessages);
console.log(totalTold);

// Expected: totalTold = 17 (sum of words for Ana's messages)