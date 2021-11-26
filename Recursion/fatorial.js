let input = 5;

function factorial(n) {
    if (n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(input));
