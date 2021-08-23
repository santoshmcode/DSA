// Question Link: https://pdfhost.io/v/Iadf0KXic_All_Twice_Except_One_II.pdf

function check(array) {
    for (let i = 0, j = 1; i < array.length; i += 2, j += 2) {
        if (array[i] !== array[j]) {
            console.log(array[i]);
            return;
        }
    }
}

function runProgram(input) {
    let newInput = input.trim().split("\n");
    for (let i = 2; i < newInput.length; i += 2) {
        let array = newInput[i]
            .trim()
            .split(" ")
            .map(Number)
            .sort((a, b) => {
                return a - b;
            });
        //console.log(array)
        check(array);
    }
}

let input = `1
5
1 2 1 3 4 4 5 2 3`;

// Expected Output: 5

runProgram(input)