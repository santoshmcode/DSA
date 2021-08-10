// Question Link: https://pdfhost.io/v/QS29NBqqO_GP_Recursion.pdf

let sum = 0;
function sumOfGP(n, r) {
    if (n < 0) {
        return 1;
    } else {
        sum += 1 / r ** n;
        return sumOfGP(n - 1, r);
    }
}

function runProgram(input) {
    let newInput = input.trim().split(" ").map(Number);
    let n = newInput[0];
    let r = newInput[1];
    sumOfGP(n, r);
    console.log(sum.toFixed(4));
}

let input = `3 5`; // Expected Output : 1.2480
runProgram(input);
