// Question Link: https://pdfhost.io/v/ODH1Mt~FN_Lower_bound_in_logn.pdf

function lowerBound(array, k) {
    let left = 0;
    let right = array.length - 1;
    let mid = Math.floor((left + right) / 2);
    while (left < right || mid == k) {
        if (array[mid] === k && array[mid - 1] == k) {
            mid--;
            continue;
        } else if (array[mid] === k && array[mid - 1] != k) {
            return mid;
        } else if (array[mid] > k) {
            right = mid - 1;
            mid = Math.floor((left + right) / 2);
            continue;
        } else if (array[mid] < k) {
            left = mid + 1;
            mid = Math.floor((left + right) / 2);
            continue;
        }
    }
    if (left == right && array[left] == k) {
        return left;
    }
    return -1;
}

function runProgram(input) {
    let newInput = input.trim().split("\n");
    let nk = newInput[0].trim().split(" ").map(Number);
    let k = nk[1];
    let array = newInput[1].trim().split(" ").map(Number);

    console.log(lowerBound(array, k));
}

let input = `5 2
1 2 2 2 5`;

runProgram(input); // Expected Output: 1
