// Q https://cloud.pdfelement.io/share/review/4TOdulHoE4tDDJkYojwSieM6x-saFmj3g8sHlDZ5kVOMIWx0T3yyQV5rS6Zzdr-9Ksh4ZHbY5U4Jf70pAiL9WA?lang=en-us

let top = -1;
let str = [];
let result = [];

function pushElement(el) {
    top++;
    str[top] = el;
}

function popElement() {
    top--;
}

function peekElement() {
    return str[top];
}

function reduceString(array) {
    for (let i = 0; i < array.length; i++) {
        if (top === -1) {
            pushElement(array[i]);
        } else if (peekElement() === array[i]) {
            popElement();
        } else if (peekElement() !== array[i]) {
            pushElement(array[i]);
        }
    }

    for (let x = 0; x <= top; x++) {
        result.push(str[x]);
    }
    if (result.length > 0) {
        return result.join("");
    } else {
        return "Empty String";
    }
}
function runProgram(input) {
    let newInput = input.trim().split("");
    console.log(reduceString(newInput));
}

let input = `aaabccddd`;
runProgram(input);
