/*
##Description:
You are given an array of N unsorted numbers. Your task is to write BUBBLE SORT such that numbers present in the array gets sorted.
USING ANY OTHER ALGORITHM THAN SELECTION SORT OR USING IN BUILT SORT FUNCTION NOT ALLOWED

Input
Input Format:
First line of input contains N
Second line of input contains N numbers

Constraints:
N < 500

Output
Output the numbers given after sorting it in increasnig order

Sample Input 1 
5
3 5 0 9 8

Sample Output 1
0 3 5 8 9

*/

let input = `5
3 5 0 9 8`;

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let swapIndex = i;
        let minElement = array[i];
        for (let j = i + 1; j < array.length; j++) {
            if (minElement > array[j]) {
                minElement = array[j];
                swapIndex = j;
            }
        }
        [array[i], array[swapIndex]] = [array[swapIndex], array[i]];
    }
    return array.join(" ");
}

// taking input
function runProgram(input) {
    var newInput = input.trim().split("\n");
    let array = newInput[1].trim().split(" ").map(Number);
    console.log(selectionSort(array));
}
runProgram(input);

/*
    Approch:
    - find the smallest element in the array and place it at 0th index 
    - then find the 2nd smallest element and then placed it at 1st index and do it till the end of the array

    Time complexity : O(n^2)
    (resone : since we are compairing every element with other array array elements)
    Space complexity : O(1)

*/
