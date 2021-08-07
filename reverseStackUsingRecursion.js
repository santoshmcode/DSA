// Question Link: https://pdfhost.io/v/WMy8RvzRO_Reverse_Stack_using_Recursion.pdf

function main(array) {
    let el = array.pop();
    if (el === -1) {
        return;
    } else {
        console.log(el);
    }

    main(array);
}

function runProgram(input) {
    let newInput = input.trim().split("\n").map(Number);
    newInput.unshift(newInput.pop());
    main(newInput);
}

let input = `1
2
3
4
-1`;

runProgram(input);
