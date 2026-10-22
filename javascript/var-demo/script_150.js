const animals = [feed, 5, 'gato'];

for (let i = 0; i < 3; i++) {
    if (i === 0) {
        feed()
    }  else {
        console.log(animals[i]);
    }
}

function feed() {
    const select = 'meat'
    console.log(select);
}