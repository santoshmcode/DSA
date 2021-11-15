// Question Link: https://pdfhost.io/v/4Azytwb31_Strings_Rotation

function stringsAndRotation(str1, str2) {
    if (str1 === str2) return "Yes";

    str2 = str2.split("");
    for (let i = 0; i < str2.length; i++) {
        let temp = str2.shift();
        str2.push(temp);
        str2 = str2.join("");
        if (str1 === str2) return "Yes";
        else str2 = str2.split("");
    }

    return "No";
}

function runProgram(input) {
    let newInput = input.trim().split("\n");
    let str1 = newInput[0];
    let str2 = newInput[1];
    console.log(stringsAndRotation(str1, str2));
}

let input = `carbon
boncar`;
runProgram(input);
