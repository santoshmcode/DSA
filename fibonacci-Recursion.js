let count = 0;
let array = [];

function fibonacci(x, previous, current) {
    if (x <= count) {
        return 1;
    } else if (x === 1) {
        array[0] = "1";
        return array;
    } else {
        let sum = previous + current;
        previous = current;
        current = sum;
        count++;
        fibonacci(x, previous, current);
        array.push(sum);
        return array;
    }
}

function runProgram(input) {
    let newInput = Number(input);
    let newArray = fibonacci(newInput, 0, 1);
    //console.log(newArray)
    if (newArray.length === 1) {
        console.log(newArray[0]);
    } else {
        console.log(newArray[1]);
    }
}

let input = `4`
runProgram(input);
