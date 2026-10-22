function saveWord(word) {
    return function sayHello() {
        return word
    }
}

const result = saveWord("hello");
console.log(result());