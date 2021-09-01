// Question Link: https://pdfhost.io/v/zqeIHUMlU_Binary_Search_Iterative.pdf

function binarySearch(array, k) {
    let left = 0;
    let right = array.length - 1;
    let mid = Math.floor((left + right) / 2);
    while (left <= right) {
        if (array[mid] === k) {
            return 1;
        } else if (k > array[mid]) {
            left = mid + 1;
            mid = Math.floor((left + right) / 2);
            continue;
        } else if (k < array[mid]) {
            right = mid - 1;
            mid = Math.floor((left + right) / 2);
            continue;
        }
    }
    return -1;
}

function runProgram(input) {
    let newInput = input.trim().split("\n");
    let nk = newInput[0].trim().split(" ").map(Number);
    let k = nk[1];
    let array = newInput[1]
        .trim()
        .split(" ")
        .map(Number)
        .sort((a, b) => {
            return a - b;
        });
    console.log(binarySearch(array, k));
}

let input = `5 0
2 -2 0 3 4`;

runProgram(input); // Expected Output: 1