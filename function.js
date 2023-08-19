var total;

function sum(a,b){
    if(!a || !b) {
        // validation
        total = 0;
        return;
    }
    total = a + b;
    console.log('Worked')
}

sum();

console.log(total);