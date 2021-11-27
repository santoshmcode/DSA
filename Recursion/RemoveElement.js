// Question Link: https://leetcode.com/problems/remove-element/

let nums = [0, 1, 2, 2, 3, 0, 4, 2];
let val = 2;

let removeElement = function (nums, val) {
    if (!nums.includes(val)) {
        console.log(nums);
        return;
    }

    let index = nums.indexOf(val);
    nums.splice(index, 1);

    return removeElement(nums, val);
};

removeElement(nums, val);

/* 
    Approch
    - Base condition will be if array will not contain val then log the array and return
    - Induction code will be if we get any val in the array will remove it for array and then again call removeElement function

*/
