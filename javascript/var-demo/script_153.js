const element = [20, 30, execute];

for (let i = 0; i < 3; i++) {
    if (i === 2) {
        execute()
    } else { 
        console.log(element[i]);
    }
}

function execute() {
    let e = 60
    console.log(e);
}