// Question Link: https://pdfhost.io/v/sY2qXKi8S_Square_root_of_an_Integer.pdf
// Editorial : https://oj.masaischool.com/contest/1791/problem/3

function sqRoot(num) {
    let left = 1;
    let right = num;
    let mid = ((left + right) / 2) | 0; // (val | 0) converts float value into int
    while (true) {
        if (mid * mid <= num && (mid + 1) * (mid + 1) > num) {
            return mid;
        }
        if (mid * mid < num) {
            left = mid + 1;
            mid = ((left + right) / 2) | 0;
        }
        if (mid * mid > num) {
            right = mid - 1;
            mid = ((left + right) / 2) | 0;
        }
    }
}

function runProgram(input) {
    let newInput = input.trim().split("\n").map(Number);
    for (let i = 1; i < newInput.length; i++) {
        console.log(sqRoot(newInput[i]));
    }
}

let input = `10
7
4
16
5
21
3
12
4
4
10`

runProgram(input)

/* 
Expected Output:
2
2
4
2
4
1
3
2
2
3
*/