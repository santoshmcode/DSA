/*
 You will be given a input n you need to print number form n to 1
 sample input
 n = 5
 output 
 5
 4
 3
 2
 1
*/

let input = 5;

function main(n) {
    if (n === 1) {
        console.log(1);
        return;
    }
    console.log(n);
    main(n - 1);
}

main(input);
