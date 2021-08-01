// Q https://pdfhost.io/v/h9erXO7i0_Buy_ticket.pdf

let queue = [];
let front = -1;
let end = -1;

function insertEl(x) {
    end++;
    queue[end] = x;
    console.log(end - front);
}

function deleteEl() {
    if (front >= end) {
        let length = end - front;
        console.log(-1, length);
    } else {
        front++;
        let leftEl = queue[front];
        let length = end - front;
        console.log(leftEl, length);
    }
}

function main(array) {
    if (array[0] === "E") {
        insertEl(array[1]);
    } else if (array[0] === "D") {
        deleteEl(array[1]);
    }
}

function runProgram(input) {
    let newInput = input.trim().split("\n");
    for (let i = 1; i < newInput.length; i++) {
        let querryArray = newInput[i].trim().split(" ");
        main(querryArray);
    }
}

let input = `5
E 2
D
D
E 3
D`;

runProgram(input);

// sample O/p
// 1
// 2 0
// -1 0
// 1
// 3 0
