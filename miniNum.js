//  Question Link: https://pdfhost.io/v/iNkzN1ypX_minimum_number_from_given_sequence_.pdf

function arrange(input, sample) {
    let flag = true;
    while (flag) {
        for (let i = 0; i < sample.length - 1; i++) {
            flag = false;
            if (input[i] === "I" && sample[i] > sample[i + 1]) {
                let temp = sample[i];
                sample[i] = sample[i + 1];
                sample[i + 1] = temp;
                flag = true;
            } else if (input[i] === "D" && sample[i] < sample[i + 1]) {
                let temp = sample[i];
                sample[i] = sample[i + 1];
                sample[i + 1] = temp;
                flag = true;
            }
        }
    }

    console.log(sample.join(""));
}

function main(input) {
    let sample = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let newInput = input.trim().split("");

    let inputLength = newInput.length;

    for (let i = 1; i < 9 - inputLength; i++) {
        sample.pop();
    }
    arrange(newInput, sample);
}

main(`D`);
main(`I`);
main(`DD`);
main(`II`);
main(`DIDI`);
main(`IIDDD`);
main(`DDIDDIID`);

//    Input: D        Output: 21
//    Input: I        Output: 12
//    Input: DD       Output: 321
//    Input: II       Output: 123
//    Input: DIDI     Output: 21435
//    Input: IIDDD    Output: 126543
//    Input: DDIDDIID Output: 321654798
