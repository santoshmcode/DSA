// Question Link: https://pdfhost.io/v/qNgAJjiO2_Power_Function_Recursive.pdf

function powerOf(num, index) {
    if (index === 1) {
        return num;
    } else if (index === 0) {
        return 1;
    } else {
        return num * powerOf(num, index - 1);
    }
}

function runProgram(input) {
    let newInput = input.trim().split(" ").map(Number);
    console.log(powerOf(newInput[0], newInput[1]));
}

input = `2 4`;
runProgram(input);
