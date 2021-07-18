// Q https://cloud.pdfelement.io/share/review/4TOdulHoE4tDDJkYojwSiQp2F-vDOr-yXy87wNOWKp_XmmChEM1RJo6a6rlU2kbcUCx7LYI7XeW6ZXaxj8myXQ?lang=en-us

let top = -1;
let pile = [];

function customerQuery() {
    if (top === -1) {
        console.log("No Food");
    } else {
        console.log(pile[top]);
        top--;
    }
}

function chefQuery(foodPackage) {
    top++;
    pile[top] = foodPackage;
}

function masaiRestaurant(data) {
    if (data[0] === 1) {
        customerQuery();
    } else if (data[0] === 2) {
        chefQuery(data[1]);
    }
}

function runProgram(input) {
    let newInput = input.trim().split("\n");
    for (let i = 1; i < newInput.length; i++) {
        let data = newInput[i].trim().split(" ").map(Number);
        masaiRestaurant(data);
    }
}

let input = `6
1
2 5
2 7
2 9
1
1`;

runProgram(input);
