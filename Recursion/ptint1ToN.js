/*
 You will be given a input n you need to print number form 1 to n
 sample input
 n = 5
 output 
 1
 2
 3
 4
 5
*/

let input = 7;

function oneToN(n) {
    if (n === 1) {
        console.log(1);
        return;
    } else {
        oneToN(n - 1);
        console.log(n);
    }
}

oneToN(input);
