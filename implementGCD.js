// Question Link: https://pdfhost.io/v/LWJuRPwUa_Implement_GCD.pdf

function implementGCD(num1, num2) {
    if (num2 === 0) return num1;

    return implementGCD(num2, num1 % num2);
}

function main(num1, num2) {
    console.log(implementGCD(num1, num2));
}

function runProgram(input) {
    let newInput = input.trim().split("\n");
    for (let i = 1; i < newInput.length; i++) {
        let numbers = newInput[i].trim().split(" ");
        let num1 = numbers[0];
        let num2 = numbers[1];
        main(num1, num2);
    }
}

let input = `10
1 4
3 1
7 10
7 8
6 6
7 2
4 1
7 3
4 8
3 4`;

runProgram(input);
