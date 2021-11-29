/*
##Description:
You are given an array of N unsorted numbers. Your task is to write BUBBLE SORT such that numbers present in the array gets sorted.
USING ANY OTHER ALGORITHM THAN BUBBLE OR USING IN BUILT SORT FUNCTION NOT ALLOWED

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

function BubbleSort(array) {
    while (true) {
        let flag = false;
        let i;
        for (i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
                flag = true;
            }
        }
        if (!flag) {
            break;
        }
        i === 0;
    }
    return array.join(" ");
}

// taking input
function runProgram(input) {
    var newInput = input.trim().split("\n");
    let array = newInput[1].trim().split(" ").map(Number);
    console.log(BubbleSort(array));
}
runProgram(input);

/* 
    Approch:
    In array check starting from first two index 
    - compair them and swap then if 1st one is grater then 2nd do it till the end of the array 
    - and again start from start from start and do above step again until whole array will get sorted

    Time complexity :  O(n^2)
    (reason : in worst case if no element is sorterd in array then inner forloop will run n times so ie will be n + (n-1) + (n-2)+.... 2+1= n^2)
    Space complexity : O(1)
*/
