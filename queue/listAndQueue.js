// Q https://pdfhost.io/v/BJE5YQWgN_List_and_Queue.pdf

let front = -1;
let end = -1;
let queue = [];

function insertInQueue(n) {
    end++;
    queue[end] = n;
}
function removeFromQueue() {
    if (front < end) {
        front++;
        console.log(queue[front]);
    } else {
        console.log("Empty");
    }
}

function main(o, n) {
    if (o === "E") {
        insertInQueue(n);
    } else {
        removeFromQueue();
    }
}

function runProgram(input) {
    let newInput = input.trim().split("\n");
    for (let i = 1; i < newInput.length; i++) {
        let element = newInput[i].trim().split(" ");
        let opration = element[0];
        let num = element[1];
        main(opration, num);
    }
}

let input = `20
D
E 74
E 24
E 68
E 100
E 90
E 88
E 10
E 9
E 65
E 65
E 24
E 74
D
E 68
E 10
E 65
D
E 74
E 71`;

runProgram(input);
