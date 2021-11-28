// Questions: https://leetcode.com/problems/k-th-symbol-in-grammar/

let n = 30;
let k = 434991989;

var kthGrammar = function (n, k) {
    if (n === 1 || k === 1) {
        return 0;
    }

    let length = Math.pow(2, n - 1);
    let mid = Math.floor(length / 2);
    if (mid >= k) {
        return kthGrammar(n - 1, k);
    } else if (mid < k) {
        let result = kthGrammar(n - 1, k - mid);
        return result === 0 ? 1 : 0;
    }
};

console.log(kthGrammar(n, k));

/*
    Approch : 
    - the grammer will be
    for n = 1 => 0
    for n = 2 => 01
    for n = 3 => 0110
    for n = 4 => 01101001
    for n = 5 => 0110100110010110

    by obersvation we can say that the value of k for n is same for n - 1 if k < mid (where mid is n.length/2)
    or 
    value of k f0r n is complement of n - 1 (where k = k - mid)

*/
