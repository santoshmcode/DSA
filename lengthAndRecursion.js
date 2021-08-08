//  Question Link: https://pdfhost.io/v/.wieICILo_Length_Recursion.pdf

let count = 0;

function main(array) {
    array.pop();
    count++;
    if (array[0] === undefined) {
        return;
    }
    main(array);
}

function runProgram(input) {
    let array = input.split("");
    main(array);
    console.log(count);
}

let input = `masaischool`;

runProgram(input);
