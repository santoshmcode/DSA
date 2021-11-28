// Question : https://leetcode.com/problems/reverse-string/

let s = ["h", "e", "l", "l", "o"];
// Output: ["o","l","l","e","h"]

var reverseString = function (s, temp = []) {
    if (s.length === 0) {
        for (let i = 0; i < temp.length; i++) {
            s[i] = temp[i];
        }
        temp = null;
        return;
    }
    temp.push(s.pop());
    return reverseString(s, temp);
};

reverseString(s);
console.log(s);

/*
    Approch: 
    - reverseString is a recursive function which pop the element form input array and push it in to the temp array
    - when input array length is becomes 0 it will populate temp array in to input string
    - since reverseString function directly changing input string s its not a pure function
*/
