function suchPairReturns(array, k) {
    array.sort(function (a, b) {
        return a - b;
    });

    let count = 0;
    let left = 0;
    let right = array.length - 1;
    while (right > left) {
        if (array[left] + array[right] === k) {
            count++;
            if (array[right] === array[right - 1]) {
                left++;
            } else {
                right--;
            }
        } else if (array[left] + array[right] > k) {
            right--;
        } else {
            left++;
        }
    }
    console.log(count);
    if (count >= 1) {
        return 1;
    } else {
        return -1;
    }
}

function runProgram(input) {
    var newInput = input.trim().split("\n");
    for (let i = 1; i < newInput.length; i += 2) {
        let nk = newInput[i].trim().split(" ").map(Number);
        let k = nk[1];
        let array = newInput[i + 1].trim().split(" ").map(Number);
        console.log(suchPairReturns(array, k));
    }
}

var input = `1
5 2
3 4 0 2 7`;

runProgram(input);
