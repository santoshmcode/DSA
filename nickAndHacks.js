// Question Link: https://pdfhost.io/v/HtXnwKFY4_Nick_and_Hacks.pdf

function isPossible(moneyNeeds, currentBalence) {
    if (moneyNeeds === currentBalence) {
        return true;
    }
    if (moneyNeeds < currentBalence) {
        return false;
    }

    return (
        isPossible(moneyNeeds, currentBalence * 10) ||
        isPossible(moneyNeeds, currentBalence * 20)
    );
}

function main(moneyNeeds, currentBalence) {
    let flag = isPossible(moneyNeeds, currentBalence);
    if (flag) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}

function runProgram(input) {
    let newInput = input.trim().split("\n").map(Number);
    for (let i = 1; i < newInput.length; i++) {
        main(newInput[i], 1);
    }
}

let input = `5
1
2
10
25
200`;

runProgram(input);
