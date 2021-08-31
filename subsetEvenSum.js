// Question Link: https://pdfhost.io/v/R.gwRBH1q_Subset_Even_Sum.pdf

function iseven(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    if (sum % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function subset(array) {
    let count = 0;
    let length = 2 ** array.length;
    for (let i = 1; i <= length - 1; i++) {
        let temp = [];
        let binaryArr = binaryArray(i, array.length);
        for (let j = 0; j < array.length; j++) {
            if (binaryArr[j] === 1) {
                temp.push(array[j]);
            }
        }
        if (iseven(temp)) {
            count++;
        }
    }
    return count;
}
function binaryArray(number, arrLength) {
    let num = number;
    let resultArray = [];
    while (num > 0) {
        resultArray.push(num % 2);
        if (num !== 0) {
            num = Math.floor(num / 2);
        }
    }
    resultArray.reverse();
    let temp = [];
    if (arrLength > resultArray.length) {
        let l = arrLength - resultArray.length;
        for (let i = 0; i < l; i++) {
            temp.push(0);
        }
    }
    let newResultArray = temp.concat(resultArray);
    return newResultArray;
}

function runProgram(input) {
    let newInput = input.trim().split("\n");
    for (let i = 2; i < newInput.length; i += 2) {
        let array = newInput[i].trim().split(" ").map(Number);
        console.log(subset(array));
    }
}

let input = `3
3
5 6 7
5
1 9 3 5 7
6
100 100 100 100 100 50`;

runProgram(input);

/*
Expected Output:
3
15
63
*/
