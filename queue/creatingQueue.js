// Linear Queue

let front = -1;
let end = -1;
let queue = [];

function enterInQueue(el) {
    end++;
    queue[end] = el;
}

function outFromQueue() {
    if (queue[front + 1] == undefined) {
        console.log("Empty queue");
    } else {
        front++;
        return queue[front];
    }
}

enterInQueue(1);
enterInQueue(1);
enterInQueue(1);
enterInQueue(1);
enterInQueue(1);
outFromQueue();
outFromQueue();
outFromQueue();
outFromQueue();
outFromQueue();
outFromQueue();

console.log("front:", front);
console.log("end:", end);
console.log("total queue length:", end - front);
