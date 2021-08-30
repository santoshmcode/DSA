// Question Link: https://pdfhost.io/v/l0wdE~1F1_Next_Greater_Sum.pdf

function nextGreaterSum(array) {
    let sum = 0;
    let grater = array[array.length - 1];
    for (let i = array.length - 2; i >= 0; i--) {
        if (grater > array[i]) {
            sum += array[i];
        }
        if (grater < array[i]) {
            grater = array[i];
        }
    }
    console.log(sum);
}

function runProgram(input) {
    let newInput = input.trim().split("\n");
    for (let i = 2; i < newInput.length; i += 2) {
        let array = newInput[i].trim().split(" ").map(Number);
        //console.log(array)
        nextGreaterSum(array);
    }
}

let input = `1
5
2 3 5 8 3`;

runProgram(input);

// Expected Output: 10
