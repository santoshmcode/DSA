// Delete middle Element form stack

let input = [1, 2, 3, 4, 5];

let pushBack = function (stack, temp) {
    if (temp.length === 0) {
        return stack;
    }
    stack.push(temp.pop());
    return pushBack(stack, temp);
};

let deleteElement = function (stack, n, temp = []) {
    if (stack.length === n + 1) {
        stack.pop();
        return pushBack(stack, temp);
    }
    temp.push(stack.pop());
    return deleteElement(stack, n, temp);
};

let main = function (input) {
    let stack = input;
    let n = Math.floor(stack.length / 2);
    return deleteElement(stack, n);
};

console.log(main(input));

/*
    Approch
    - in main function first find the middle element position 
    - then in the delete function passed input stack, n (middel element position) 
    - delete element is a resursive function wihich pop the element of stack and push in to the temp except element at nth position
    - and function pushback will push back the element of stack which was stored in temp and returned the stack
*/
