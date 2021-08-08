// Question Link: https://pdfhost.io/v/eSPiXlMP8_Binary_Equivalent_Recursive.pdf

let array = [];

function binaryOf(num) {
    if (num === 1 || num === 0) {
        array.unshift(num);
        return;
    } else {
        let mod = num % 2;
        array.unshift(mod);
        num = Math.floor(num / 2);
        binaryOf(num);
    }
}

function runProgram(input) {
    let newInput = input.split("\n").map(Number);

    for (let i = 1; i < newInput.length; i++) {
        binaryOf(newInput[i]);
        console.log(array.join(""));
        array = [];
    }
}

let input = `2
15
128`;

runProgram(input);
