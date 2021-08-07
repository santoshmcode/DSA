// Question Link: https://pdfhost.io/v/~Acsfa5Wk_Recursive_Bubble_sort.pdf

function main(array) {
    let flag = true;
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            let temp = array[i];
            array[i] = array[i + 1];
            array[i + 1] = temp;
            flag = false;
        }
    }
    if (flag) {
        return array.join(" ");
    } else {
        return main(array);
    }
}

function runProgram(input) {
    let newInput = input.trim().split("\n");
    let array = newInput[1].split(" ").map(Number);
    console.log(main(array));
}

let input = `5
3 5 0 9 8`;

runProgram(input);
