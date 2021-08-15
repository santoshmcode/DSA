// Question Link: https://pdfhost.io/v/UY6bPNsr6_The_Famous_Sum.pdf

function famousSum(str) {
    if (str.length === 1) {
        return str;
    } else {
        let sum = 0;
        for (let i = 0; i < str.length; i++) {
            sum += str[i] / 1;
        }
        return famousSum(sum + "");
    }
}

function main(n, k) {
    let concatResult = "";
    for (let i = 0; i < k; i++) {
        concatResult += n;
    }
    return famousSum(concatResult);
}

function runProgram(input) {
    let newInput = input.trim().split(" ");
    let n = newInput[0];
    let k = newInput[1] / 1;
    console.log(main(n, k));
}

let input = `148 3`; //Expected Output: 3
runProgram(input);
