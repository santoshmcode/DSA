// Question Link : https://pdfhost.io/v/apiBBFVW5_Equilibrium_Element

let input = `5
3 3 5 5 1`;

let newInput = input.split("\n");
let array = newInput[1].trim().split(" ").map(Number);

//  Time Complexity O(n^2) & space Complexity O(1)
function equlibrium(array) {
    if (array.length < 3) return -1;
    for (let i = 1; i < array.length - 1; i++) {
        let sumL = array[0];
        let sumR = array[i + 1];
        for (let j = 1; j < i; j++) {
            sumL += array[j];
        }
        for (let k = i + 2; k < array.length; k++) {
            sumR += array[k];
        }
        if (sumL === sumR) return i + 1;
    }
    return -1;
}

// console.log(equlibrium(array));

////  Time Complexity O(n) & space Complexity O(1)

function equlibrium2(array) {
    if (array.length < 3) return -1;

    sum = array[2];
    sumLeft = array[0];
    for (let i = 3; i < array.length; i++) {
        sum += array[i];
    }

    for (let j = 1; j < array.length; j++) {
        if (sum === sumLeft) {
            return j + 1;
        } else {
            sum -= array[j + 1];
            sumLeft += array[j];
        }
    }
    return -1;
}

console.log(equlibrium2(array));
