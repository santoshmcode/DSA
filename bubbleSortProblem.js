//Q https://pdfhost.io/v/iCWAbKTeK_Bubble_Sort_Problempdf.pdf

function bubbleSort(array) {
    let length = array.length;
    let temp;
    while (length > 0) {
        let i = 0;
        let j = 1;
        while (j < length) {
            if (array[i] > array[j]) {
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            i++;
            j++;
        }

        length = length - 1;
    }
    return array.join(" ");
}

function runProgram(input) {
    let newInput = input.trim().split("\n");
    let array = newInput[1].trim().split(" ").map(Number);
    console.log(bubbleSort(array));
}

let input = `5
3 5 0 9 8`;
runProgram(input);