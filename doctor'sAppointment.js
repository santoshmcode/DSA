// Question: https://pdfhost.io/v/5ZcFTN9EX_Doctors_Appointment.pdf

function main(assistntOrder, randomOrder) {
    let move = 0
    for (let i = 0; i < assistntOrder.length; i++) {
        let j = 0
        while (true) {
            move++;
            if (assistntOrder[i] === randomOrder[j]) {
                randomOrder.splice(j, 1);
                break;
            }
            j++;
        }
    }
    return move-1;
}

function runProgram(input) {
    let newInput = input.trim().split("\n");
    let assistntOrder = newInput[1].trim().split(" ").map(Number);
    let randomOrder = newInput[2].trim().split(" ").map(Number);
    console.log(main(assistntOrder, randomOrder));
}

let input = `20
18 19 14 3 20 13 10 15 8 9 16 5 11 7 17 2 12 6 1 4
20 10 13 15 17 2 12 18 16 8 9 6 5 19 1 7 14 3 11 4`;

runProgram(input);

// Expected Output for This input : 
// 93
