// Q https://pdfhost.io/v/aB0p9oOtT_Again_a_classical_problem.pdf

let stack = [];

function main(array) {
    let flag = true;

    if (array.length % 2 === 1) {
        return "not balanced";
    } else if (array[0] === ")" || array[0] === "}" || array[0] === "]") {
        return "not balanced";
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i] === "(" || array[i] === "{" || array[i] === "[") {
            stack.push(array[i]);
        } else if (array[i] === ")" || array[i] === "}" || array[i] === "]") {
            let temp = stack.pop();
            if (
                (array[i] === ")" && temp !== "(") ||
                (array[i] === "}" && temp !== "{") ||
                (array[i] === "]" && temp !== "[")
            ) {
                flag = false;
            }
        }
    }

    if (flag) {
        return "balanced"
    } else {
        return "not balanced"
    }
}

function runProgram(input) {
    let newInput = input.trim().split("\n");
    for (let i = 1; i < newInput.length; i++) {
        let array = newInput[i].trim().split("");
        console.log(main(array));
    }
}

let input = `5
){(){[])}]
]]])}[(}}{
{{}}
[(){}{())[
[}]{(}[[}[`;
runProgram(input);

// balanced
// not balanced
