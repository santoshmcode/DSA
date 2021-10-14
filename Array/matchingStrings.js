// Question Link: https://www.hackerrank.com/challenges/sparse-arrays/problem?isFullScreen=true

function matchingStrings(strings, queries) {
    let resultArray = [];
    for (let i = 0; i < queries.length; i++) {
        let count = 0;
        for (let j = 0; j < strings.length; j++) {
            if (queries[i] === strings[j]) count++;
        }
        resultArray.push(count);
    }

    return resultArray;
}

let strings = ["aba", "baba", "aba", "xzxb"];
let queries = ["aba", "xzxb", "ab"];
console.log(matchingStrings(strings, queries));
