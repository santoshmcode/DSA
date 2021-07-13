// Q https://pdfhost.io/v/Ya~T8it4R_Selection_Sort_Problempdf.pdf

function selectionSort(array) {
    let counter = 0;
    while (counter < array.length) {
        let smallIndex = counter;
        let smallNumber = array[counter];
        for (let i = counter; i < array.length; i++) {
            if (array[i] < smallNumber) {
                smallNumber = array[i];
                smallIndex = i;
            }
        }
        //console.log(smallNumber, smallIndex)
        let temp = array[counter];
        array[counter] = array[smallIndex];
        array[smallIndex] = temp;
        counter++;
    }
    return array.join(" ");
}

function runProgram(input) {
    let newInput = input.trim().split("\n");
    let array = newInput[1].trim().split(" ").map(Number);
    console.log(selectionSort(array));
}

let input = `6
3 5 0 9 8 1`;
runProgram(input);