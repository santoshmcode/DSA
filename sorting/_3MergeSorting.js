/*
##Description:
You are given an array of N unsorted numbers. Your task is to write BUBBLE SORT such that numbers present in the array gets sorted.
USING ANY OTHER ALGORITHM THAN MEARGE SORT OR USING IN BUILT SORT FUNCTION NOT ALLOWED

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

function mergeSort(array) {
    // base conditions
    if (array.length === 1) return array;

    // spliting the original array in to halfs
    let mid = Math.floor(array.length / 2);
    let arr1 = array.splice(0, mid);
    let arr2 = [...array];

    // passing both array saperatly
    arr1 = mergeSort(arr1);
    arr2 = mergeSort(arr2);

    // mearging the sorted arrays
    //(According to the hypothysis function mergeSort will reutrn a sorted array so arr1 & arr2 both are sorted one)
    let i = 0;
    let j = 0;
    let result = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    let temp = [];
    if (i < arr1.length) {
        temp = arr1.splice(i);
    } else {
        temp = arr2.splice(j);
    }
    result = [...result, ...temp];
    return result;
}

// taking input
function runProgram(input) {
    var newInput = input.trim().split("\n");
    let array = newInput[1].trim().split(" ").map(Number);
    console.log(mergeSort(array).join(" "));
}
runProgram(input);

/**
 * Approch:
 * - In merge sort we split the array in to two halfs, and we design a hypothisis that mergeSort is a recursive function which takes the array and returns the sorted array
 * - So we pass both splited arrays to the mergeSort function one by one and we just need to merge both output in to the single array
 *
 * Time complexity : O(n*Log n)
 * (resone: in all the 3 cases (worst, average and best) as the mergesort always divides the array into two halves and takes linear time to merge two halves)
 * Space complexity : O(n)
 */
