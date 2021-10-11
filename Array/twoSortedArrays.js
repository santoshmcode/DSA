// Question Link: https://pdfhost.io/v/0UaJUzKDV_Two_Sorted_Arrays

function TwoSortedArrays(array1, array2) {
    let i = 0;
    let j = 0;
    let count = 0;
    while (j < array2.length && i < array1.length) {
        if (array2[j] === array1[i]) {
            //console.log(i,j)
            count++;
            i++;
            j++;
        }
        if (array1[i] < array2[j]) {
            i++;
        }
        if (array2[j] < array1[i]) {
            j++;
        }
    }
    return count;
}

function runProgram(input) {
    let newInput = input.trim().split("\n");
    for (let i = 2; i < newInput.length; i += 3) {
        let array1 = newInput[i].trim().split(" ").map(Number);
        let array2 = newInput[i + 1].trim().split(" ").map(Number);
        console.log(
            TwoSortedArrays(
                array1,
                array2.sort((a, b) => a - b)
            )
        );
    }
}

let input = `1
        6
        1 2 2 3 4 5
        4 4 3 2 1 1`;

runProgram(input);
