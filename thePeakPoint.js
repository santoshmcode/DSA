// Question Link: https://pdfhost.io/v/1pO61Q4UY_The_Peak_Point.pdf

function peakPoint(array) {
    let sortedArray = [...array];
    sortedArray.pop;
    sortedArray.shift();
    sortedArray.sort((a, b) => b - a);

    const number = sortedArray[0];

    for (let i = 0; i < array.length; i++) {
        if (array[i] === number) return i;
    }
}

function runProgram(input) {
    var newInput = input.trim().split("\n");
    for (let i = 2; i < newInput.length; i += 2) {
        let array = newInput[i].trim().split(" ").map(Number);

        console.log(peakPoint(array));
    }
}

let input = `2
3
10 20 11
5
1 3 6 5 4`;

runProgram(input);

/* 
Expected Output:
1
2
*/