// Q https://pdfhost.io/v/m8Fet67FS_Make_Leaderboardpdf.pdf

function giveRank(name, score) {
    let rank = 1;
    let pre = 0;
    let output = `${rank} ${name[0]}\n`;
    for (let i = 1; i < name.length; i++, pre++) {
        if (score[i] == score[pre]) {
            output += `${rank} ${name[i]}\n`;
        } else {
            rank = i + 1;
            output += `${rank} ${name[i]}\n`;
        }
    }
    return output.trim();
}

function checkName(str1, str2) {
    let smallerLength;
    if (str1.length < str1.length) {
        smallerLength = str1.length;
    } else {
        smallerLength = str2.length;
    }

    for (let i = 0; i < smallerLength; i++) {
        if (str1[i] != str2[i]) {
            if (str1.charCodeAt(i) > str2.charCodeAt(i)) {
                return true;
            } else {
                return false;
            }
        }
    }

    if (str1.length > str2.length) {
        return true;
    } else {
        return false;
    }
}

function makeLeaderboard(name, score) {
    // sorting name my alphabetically
    for (let x = 0; x < name.length; x++) {
        let i = 0;
        let j = 1;
        for (; j < name.length; j++) {
            if (checkName(name[i], name[j])) {
                // swaping names
                let temp = name[i];
                name[i] = name[j];
                name[j] = temp;

                // swaping score as well
                let temp2 = score[i];
                score[i] = score[j];
                score[j] = temp2;
            }
            i++;
        }
    }

    // sorting score by decanding order
    for (let x = 0; x < score.length; x++) {
        let i = 0;
        let j = 1;
        for (; j < name.length; j++) {
            if (score[i] < score[j]) {
                // swaping score
                let temp2 = score[i];
                score[i] = score[j];
                score[j] = temp2;

                // swaping names
                let temp = name[i];
                name[i] = name[j];
                name[j] = temp;
            }
            i++;
        }
    }
    return giveRank(name, score);
}

function runProgram(input) {
    let name = [];
    let score = [];
    var newInput = input.trim().split("\n");
    for (let i = 1; i < newInput.length; i++) {
        let subArray = newInput[i].trim().split(" ");
        name.push(subArray[0]);
        score.push(subArray[1] / 1);
    }

    let result = makeLeaderboard(name, score);
    console.log(result);
}

input = `6
rancho 45
chatur 32
raju 30
farhan 28
virus 32
joy 45`;

runProgram(input);
