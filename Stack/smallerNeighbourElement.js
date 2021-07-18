// Q https://cloud.pdfelement.io/share/review/4TOdulHoE4tDDJkYojwSiQqcXeQt5qJlFsrjgDZKaTFm5Mcy0BxUI3fU5RbpvNB_ttTvCtBAoTHNg9ZOEOE1Hw?lang=en-us

let top = -1;
let stack = [];

function pushElement(el) {
    top++;
    stack[top] = el;
}

function peekElement() {
    return stack[top];
}

function popElement() {
    top--;
}

function smallerNeighbourElement(array) {
    let result = "";
    for (let i = 0; i < array.length; i++) {
        if (top === -1) {
            pushElement(array[i]);
            result += -1 + " ";
        } else if (top !== -1 && peekElement() >= array[i]) {
            while (top > -1) {
                popElement();
                if (peekElement() < array[i]) {
                    result += peekElement() + " ";
                    pushElement(array[i]);
                    break;
                }
            }
            if (top === -1) {
                pushElement(array[i]);
                result += -1 + " ";
            }
        } else if (top !== -1 && peekElement() < array[i])
            result += peekElement() + " ";
        pushElement(array[i]);
    }
    return result;
}

function runProgram(input) {
    let newInput = input.trim().split("\n");
    let array = newInput[1].trim().split(" ").map(Number);
    console.log(smallerNeighbourElement(array));
}

let input = `8
39 27 11 4 24 32 32 1`;

runProgram(input);
