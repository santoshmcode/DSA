// Q https://pdfhost.io/v/cQCE7u697_New_Year_Celebration.pdf

let queue = [];
let stack = [];
let top = -1;
let front = -1;
let end = -1;

function sPush(x) {
    top++;
    stack[top] = x;
}

function sPop() {
    if (top === -1) {
        return -1;
    } else {
        return stack[top--];
    }
}

function sPeek() {
    if (top === -1) {
        console.log(-1);
    } else {
        console.log(stack[top]);
    }
}

function qPush(x) {
    end++;
    queue[end] = x;
}

function qPop() {
    if (end <= front) {
        console.console.log(-1);
    } else {
        front++;
        return queue[front];
    }
}

function qPeek() {
    if (end <= front) {
        console.log(-1);
    } else {
        console.log(queue[front + 1]);
    }
}

function main(array) {
    if (array[0] === 1) {
        qPush(array[1]);
    } else if (array[0] === 2) {
        sPush(array[1]);
    } else if (array[0] === 3) {
        qPeek();
    } else if (array[0] === 4) {
        sPeek();
    } else if (array[0] === 5) {
        let temp = qPop();
        sPush(temp);
    }
}

function runProgram(input) {
    let newInput = input.trim().split("\n");
    for (let i = 1; i < newInput.length; i++) {
        querryArray = newInput[i].trim().split(" ").map(Number);
        main(querryArray);
    }
}

let input = `7
1 4
2 3
1 2
3
4
5
4`;

runProgram(input);

// expected O/p
// 4
// 3
// 4
