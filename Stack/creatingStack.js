// creating Your own stack

let top = -1;
let array = [];

// Adding element at top
function pushElement(data) {
    top++;
    console.log((array[top] = data));
}

// Removing element for top
function popElement() {
    if (top == -1) {
        console.log("empty Stack");
    } else {
        console.log(array[top--]);
    }
}

// Checking top position element without removing it
function peekElement() {
    if (top == -1) {
        console.log("empty Stack");
    } else {
        console.log(array[top]);
    }
}

function sizeOfStack() {
    console.log(top + 1);
}

pushElement(5);
pushElement(10);
pushElement(15);
popElement();
popElement();
popElement();
peekElement()
sizeOfStack()
