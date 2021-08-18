// Question Link: https://pdfhost.io/v/tP9Rb7fEZ_Generate_Permutations.pdf

let resultArray = [];

function swap(array, l, i) {
    [array[i], array[l]] = [array[l], array[i]];
}

function permutations(array, l, r) {
    if (l === r) {
        resultArray.push(Number(array.join("")));
    } else {
        for (let i = l; i <= r; i++) {
            let tempArray = [...array];
            swap(tempArray, l, i);
            permutations(tempArray, l + 1, r);
        }
    }
}

function runProgram(input) {
    let newInput = input.trim().split("\n");
    let array = newInput[1].trim().split(" ").map(Number);
    permutations(array, 0, array.length - 1);

    resultArray.sort((a, b) => {
        return a - b;
    });

    for (let i = 0; i < resultArray.length; i++) {
        let temp = resultArray[i];
        temp = temp + "";
        console.log(temp.split("").join(" "));
    }
}

let input = `3
1 2 3`;

runProgram(input);

/* Expected Output : 
1 2 3
1 3 2
2 1 3
2 3 1
3 1 2
3 2 1
*/
