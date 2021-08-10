// Question Link: https://pdfhost.io/v/xG4kcAl7u_Sum_with_Recursion_Again.pdf

let sum = 0;

function main(array) {
    if (array.length === 1) {
        return;
    } else {
        sum += Math.abs(array[0] - array[1]);
        array.shift();
        return main(array);
    }
}

function runProgram(input) {
    let newInput = input.trim().split("\n");
    for (let i = 2; i < newInput.length; i += 2) {
        let array = newInput[i].trim().split(" ").map(Number);
        main(array);
        console.log(sum);
        sum = 0;
    }
}

let input = `2
3
1 5 2
5
3 5 6 1 8`;

runProgram(input);

/* 
Expected Output:
7
15
*/