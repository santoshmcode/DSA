// Question Link: https://pdfhost.io/v/7mTQUFnwf_N_Queens_Variant.pdf

let resultArray = [];

function isPossible(chess, row, col) {
    // vertical
    for (let i = row - 1, j = col; i >= 0; i--){
        if (chess[i][j] === "♛") return false;
    }

    // left dig
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--){
        if (chess[i][j] === "♛") return false;
    }

    // right dig
    for (let i = row - 1, j = col + 1; i >= 0 && j < chess.length; i--, j++){
        if (chess[i][j] === "♛") return false;
    }

    return true;
}


function nQueen(chess, row) {
    if (row >= chess.length) {
        // console.log(chess)
        resultArray.push(chess)
        return
    }

    for (let col = 0; col < chess.length; col++) {
        if (isPossible(chess, row, col)) {
            chess[row][col] = "♛";
            nQueen(chess, row + 1)
            chess[row][col] = "•"
        }
    }
}

function main(num) {
    let chess = []
    for (let i = 0; i < num; i++) {
        let tempRow = []
        for (let j = 0; j < num; j++) {
            tempRow.push("•");
        }
        chess.push(tempRow)
    }
    nQueen(chess, 0)
    console.log(resultArray.length);

}


function runProgram(input) {
    let newInput = Number(input);
    main(newInput);
    
}

let input = `8`; // Expected Output : 92

runProgram(input);