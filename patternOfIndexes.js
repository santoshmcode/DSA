// Question Link: https://pdfhost.io/v/AcTdKHwBD_Pattern_of_Indexes.pdf

function pattern(n) {
    let array = [];
    for (let j = 0; j < n; j++) {
        let temp = [];
        for (let i = 0; i < n; i++) {
            if (i % 2 === 0) {
                temp.push(j);
            } else {
                temp.push(i);
            }
        }
        array.push(temp.join(" "));
    }
    console.log(array.join("\n"));
}

function runProgram(input) {
    let newInput = input / 1;
    pattern(newInput);
}

let input = `5`;

runProgram(input)

/*
Expected Output:
0 1 0 3 0
1 1 1 3 1
2 1 2 3 2
3 1 3 3 3
4 1 4 3 4
*/