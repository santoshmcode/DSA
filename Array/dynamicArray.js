// Question link: https://www.hackerrank.com/challenges/dynamic-array/problem?isFullScreen=true

let n = 2;
let queries = [
    [1, 0, 5],
    [1, 1, 7],
    [1, 0, 3],
    [2, 1, 0],
    [2, 1, 1],
];
console.log(dynamicArray(n, queries));
function dynamicArray(n, queries) {
    let arr = [];
    for (let m = 0; m < n; m++) {
        arr[m] = [];
    }
    let lastAnswer = 0;
    let answer = [];
    let k = 0;
    for (let i = 0; i < queries.length; i++) {
        if (queries[i][0] === 1) {
            let x = queries[i][1];
            let y = queries[i][2];
            let temp = (x ^ lastAnswer) % n;
            arr[temp].push(y);
        }
        if (queries[i][0] === 2) {
            let x = queries[i][1];
            let y = queries[i][2];
            let temp = (x ^ lastAnswer) % n;
            lastAnswer = arr[temp][y % arr[temp].length];
            answer[k] = lastAnswer;
            k++;
        }
    }
    //console.log(arr)
    return answer;
}
