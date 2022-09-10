
let index = 1;
let fact = 1;
bucleFactorial: while (true) {


    fact =  fact * index;
    if (index >= 10) {
        break bucleFactorial;
    }
    index++;


}

console.log(fact)