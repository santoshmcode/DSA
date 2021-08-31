let arr = [
  [ 1, 1, 1, 0, 0, 0 ],
  [ 0, 1, 0, 0, 0, 0 ],
  [ 1, 1, 1, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0 ]
]

console.log(hourglassSum(arr));

function hourglassSum(arr) {
    
    let sumArr = [];
    for (let i = 0; i < 4; i++) {
        let sum;
        for (let j = 0; j < 4; j++) {
            sum =
                arr[i][j] +
                arr[i][j + 1] +
                arr[i][j + 2] +
                arr[i + 1][j + 1] +
                arr[i + 2][j] +
                arr[i + 2][j + 1] +
                arr[i + 2][j + 2];
                sumArr.push(sum);
            }
        }
        
    sumArr.sort((a, b) => { return b - a })
    return sumArr[0]
    
}