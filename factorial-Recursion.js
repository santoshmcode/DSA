// Question Link: https://pdfhost.io/v/CwKAzOGbF_FactorialRecursion.pdf

function factorial(x) {
    if (x === 1) {
        return 1;
    } else {
        return x * factorial(x - 1);
    }
}

function runProgram(input) {
    let newInput = Number(input);
    console.log(factorial(newInput));
}

let input = `5`;
runProgram(input);
