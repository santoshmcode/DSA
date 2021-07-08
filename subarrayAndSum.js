function subarrayAndSum(array, k) {
    var objOfSubArray = {};
    let sum = 0;
    let subArray = [];
    for (let i = 0; i < array.length; i++) {
        sum = 0;
        subArray = [];
        for (let j = i; j < array.length; j++) {
            sum += array[j];
            subArray.push(array[j]);

            if (sum % k !== 0) {
                if (objOfSubArray[subArray.length] == undefined) {
                    objOfSubArray[subArray.length] = 1;
                } else {
                    objOfSubArray[subArray.length]++;
                }
            }
        }
    }

    var resultArray = [];
    for (key in objOfSubArray) {
        resultArray.push(objOfSubArray[key]);
    }

    for (let i = resultArray.length - 1; i >= 0; i--) {
        if (resultArray[i] > 0) {
            return resultArray[i];
        }
    }
    return 0;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let nk = newInput[0].trim().split(" ").map(Number);
    let k = nk[1];
    let array = newInput[1].trim().split(" ").map(Number);
    console.log(subarrayAndSum(array, k));
}

var input = `4 3
2 3 4 6`;

runProgram(input);
