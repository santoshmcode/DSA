// Question Link: https://pdfhost.io/v/yHPoxuknU_Santosh_Profit.pdf

let count = 0;

function main(data) {
    if (data <= 4 || (data % 4 !== 0 && data % 8 !== 0)) {
        return;
    } else {
        count++;

        return main(data - 8) || main(data - 4);
    }
}

function runProgram(input) {
    let newInput = input.trim().split("\n").map(Number);
    for (let i = 1; i < newInput.length; i++) {
        let data = newInput[i];
        let tempData = data;
        main(data);
        if (tempData === 4) {
            console.log(1);
        } else if (count === 0) {
            console.log(count);
        } else {
            console.log(count + 1);
        }

        count = 0;
    }
}

let input = `7
3
4
106
28
150
140
137`;

runProgram(input);

/* 
Expected Output : 
0
1
0
21
0
14930352
0
*/
