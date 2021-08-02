// Question Link: https://pdfhost.io/v/ot4rY2BNG_Strings_with_Parenthesis.pdf

let stack = [];

function main(array) {
    let flag = true;

    if (array.length % 2 === 1) {
        return "unbalanced";
    } else if (array[0] === ")" || array[0] === "}" || array[0] === "]") {
        return "unbalanced";
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
        return "balanced";
    } else {
        return "unbalanced";
    }
}

function runProgram(input) {
    let array = input.trim().split("");
    let newInputArray = [];
    for (let i = 0; i < array.length; i++) {
        if (
            array[i] === "{" ||
            array[i] === "}" ||
            array[i] === "[" ||
            array[i] === "]" ||
            array[i] === "(" ||
            array[i] === ")"
        ) {
            newInputArray.push(array[i]);
        }
    }
    console.log(main(newInputArray));
}

let input = `[one [two [three [four [five [six [seven [eight [nine [ten ]]]]]]]]]]`;
runProgram(input);

// Expected Output:
// balanced