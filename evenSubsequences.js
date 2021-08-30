// Question Link: https://pdfhost.io/v/jlIUuk~oD_Even_subsequences.pdf

function evenSubsequences(array) {
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            count++;
            if (count >= 1) {
                return "yes";
            }
        }
    }
    return "no";
}

function runProgram(input) {
    let newInput = input.trim().split("\n");
    for (let i = 2; i < newInput.length; i += 2) {
        let array = newInput[i].trim().split(" ").map(Number);
        console.log(evenSubsequences(array));
    }
}

let input = `2
5
4 3 2 1 5
2
1 3`;

runProgram(input);

/* 
Expected Output:
yes
no
*/