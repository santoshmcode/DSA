// Question Link : https://leetcode.com/problems/first-unique-character-in-a-string/

// let input = "leetcode";
let input = "aabbb";

function findUniqueLetter(str) {
    let map = new Map();
    for (let i = 0; i < str.length; i++) {
        if (map.has(str[i])) {
            let temp = map.get(str[i]);
            map.set(str[i], ++temp);
        } else {
            map.set(str[i], 1);
        }
    }

    let uniqueLetter;
    let flag = true;
    map.forEach((value, key) => {
        if (value === 1 && flag) {
            uniqueLetter = key;
            flag = false;
        }
    });
    if (!uniqueLetter) {
        return -1;
    }
    for (let i = 0; i < str.length; i++) {
        if (str[i] === uniqueLetter) return i;
    }
}
// findUniqueLetter(input);
console.log(findUniqueLetter(input));
