// https://leetcode.com/problems/sort-an-array/

// let nums = [5, 2, 3, 1];
let nums = [-1, -4, 44, 0, -88, 78, 1];

let place = function (arr, n) {
    if (arr[arr.length - 1] <= n || arr.length === 0) {
        arr.push(n);
        return arr;
    }
    let temp = arr.pop();
    arr = place(arr, n);
    arr.push(temp);
    return arr;
};

let sortArray = function (nums) {
    //base condition
    if (nums.length === 1) {
        return nums;
    }
    let n = nums.pop();
    nums = sortArray(nums);

    // Finding position of n using for loop
    /* 
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= n) {
            nums.splice(i, 0, n);
            return nums;
        }
    }
    nums.push(n);
    return nums;
*/
    // Finding position of n again recursion
    return place(nums, n);
};

console.log(sortArray(nums));

/* 
    Approch to solve this problem

    - consider a hypothis sort function is sorting the length n array
    - on bases of above hypothis we can consider that sort function will also sort array of length n - 1
    - now we just need to place the nth element in proper position in n - 1 length array which is already sorted

*/
