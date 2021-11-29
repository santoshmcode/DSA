/*
##Description:
You are given an array of N unsorted numbers. Your task is to write BUBBLE SORT such that numbers present in the array gets sorted.
USING ANY OTHER ALGORITHM THAN QUICK SORT OR USING IN BUILT SORT FUNCTION NOT ALLOWED

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
1 2 3 4 5`;

function partion(arr, l, h) {
    let i = l;
    let j = h;
    let pivot = arr[l];

    while (i < j) {
        while (arr[i] <= pivot) i++;
        while (arr[j] > pivot) j--;
        if (i <= j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            console.log("i", i, "j", j);
        }
    }

    [arr[l], arr[j]] = [arr[j], arr[l]];
    console.log("arr:", arr);

    return j;
}

function quickSort(arr, l, h) {
    if (l >= h) return;

    let pivotIndex = partion(arr, l, h);
    quickSort(arr, l, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, h);
}

// taking input
function runProgram(input) {
    var newInput = input.trim().split("\n");
    let array = newInput[1].trim().split(" ").map(Number);
    quickSort(array, 0, array.length - 1);
    console.log(array.join(" "));
}
runProgram(input);

/**
 * Approch : In Hypothesis we consider the quick sort element will give us a sorted araay if we pass array lower and high
 * so we again called quick sort for smaller input and we made input smaller using partion function which devide the array in two parts using pivot
 *
 * Time Complexity: avg O(NlogN)
 *                  worst O(N^2)
 * Space complexity: O(1)
 */
