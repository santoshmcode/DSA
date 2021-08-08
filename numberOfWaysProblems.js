//  Question Link: https://pdfhost.io/v/1eyOCYebI_Number_of_ways_problems.pdf

function main(steps) {
    if (steps < 0) {
        return 0;
    }
    if (steps === 1 || steps === 0) {
        return 1;
    }

    return main(steps - 1) + main(steps - 2) + main(steps - 3);
}

function runProgram(input) {
    let newInput = input.trim() / 1;
    main(newInput);
    console.log(main(newInput));
}

let input = `4`; // Expected Output : 7

runProgram(input);
