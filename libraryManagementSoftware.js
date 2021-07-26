// Q https://pdfhost.io/v/g0LlRj~ai_Library_Management_Software.pdf

let top = -1;
let stack = [];
function cusPush(x) {
    top++;
    stack[top] = x;
}
function cusPop() {
    if (top == -1) {
        console.log("No Books");
    } else {
        console.log(stack[top]);
        top--;
    }
}
function cusShow() {
    if (top == -1) {
        console.log("No Books");
    } else {
        console.log(stack[top]);
    }
}

function libraryManagementSoftware(subArray) {
    if (subArray[0] == 1) {
        cusPush(subArray[1]);
    } else if (subArray[0] == 2) {
        cusPop();
    } else if (subArray[0] == 3) {
        cusShow();
    }
}

function runProgram(input) {
    var newInput = input.trim().split("\n");
    for (let i = 1; i < newInput.length; i++) {
        let subArray = newInput[i].trim().split(" ").map(Number);
        libraryManagementSoftware(subArray);
    }
}

let input = `6
1 1
2 
1 2
3
2
3`;

runProgram(input);