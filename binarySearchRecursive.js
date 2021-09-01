// Question Link: https://pdfhost.io/v/PVeRkLuYj_Binary_Search_Recursive.pdf

function binarySearch(array, left, right, mid, k) {
    if (left > right) {
        return -1;
    } else {
        if (array[mid] === k) {
            return 1;
        } else if (k > array[mid]) {
            left = mid + 1;
            mid = Math.floor((left + right) / 2);
            return binarySearch(array, left, right, mid, k);
        } else if (k < array[mid]) {
            right = mid - 1;
            mid = Math.floor((left + right) / 2);
            return binarySearch(array, left, right, mid, k);
        }
    }
}

function main(array, k) {
    let left = 0;
    let right = array.length - 1;
    let mid = Math.floor((left + right) / 2);
    return binarySearch(array, left, right, mid, k);
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
    console.log(main(array, k));
}

let input = `5 0
2 -2 0 3 4`;

runProgram(input); // Expected Output: 1