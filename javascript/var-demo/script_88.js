function saveScore(score) {

    return function setScore() {
        return score
    }

}

const result = saveScore(100);
console.log(result());

//el closure guarda la variable score del 
// scope de saveScore, para que setScore
//  pueda acceder a ella después