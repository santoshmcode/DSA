// Q https://cloud.pdfelement.io/share/review/4TOdulHoE4tDDJkYojwSifT2qRS2Euj0iF2c6Uo_1HcnRAdtaYFIUBB0xJsvL7Yj

let top = -1;
let stack = [];

function pushElement(data) {
    top++;
    stack[top] = data;
}

function popElement() {
    if (top === -1) {
    } else {
        top--;
    }
}

function peekElement() {
    if (top === -1) {
        console.log("Empty!");
    } else {
        console.log(stack[top]);
    }
}

function pushPopAndTop(input) {
    if (input[0] === 1) {
        pushElement(input[1]);
    } else if (input[0] === 2) {
        popElement();
    } else if (input[0] === 3) {
        peekElement();
    }
}

function runProgram(input) {
    let newInput = input.trim().split("\n");
    for (let i = 1; i < newInput.length; i++) {
        let element = newInput[i].trim().split(" ").map(Number);
        pushPopAndTop(element);
    }
}

let input = `6
1 15
1 20
2
3
2
3`;

runProgram(input);
