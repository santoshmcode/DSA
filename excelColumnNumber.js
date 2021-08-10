// Question Link: https://pdfhost.io/v/wbcIbnWtg_Excel_Column_number.pdf

let letterArray = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "v",
    "W",
    "X",
    "Y",
    "Z",
];

let mul = 1;
let sum = 0;

function main(array) {
    if (array.length === 0) {
        return;
    } else {
        let popEl = array.pop();

        let index = letterArray.indexOf(popEl) + 1;
        sum += index * 26 ** mul;
        mul++;
        return main(array);
    }
}

function runProgram(input) {
    let newInput = input.trim().split("\n");
    for (let i = 1; i < newInput.length; i++) {
        let array = newInput[i].split("");
        let temp = array.pop();
        let tempIndex = letterArray.indexOf(temp) + 1;
        main(array);
        console.log(sum + tempIndex);
        sum = 0;
        mul = 1;
    }
}

let input = `6
CG
ZZHY
HMAIOM
UQPISDCS
Y
QH`;

runProgram(input);

/* 
Expected Output :
85
474785
101015759
174114133433
25
450
*/
