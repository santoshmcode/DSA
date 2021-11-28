// Question : https://practice.geeksforgeeks.org/problems/tower-of-hanoi-1587115621/1#

let N = 3;
let s = 1;
let h = 2;
let d = 3;

let count = 0;
function toh(N, s, d, h) {
    if (N === 1) {
        console.log(`move disk ${N} from rod ${s} to rod ${d}`);
        return ++count;
    }
    toh(N - 1, s, h, d);
    count++;
    console.log(`move disk ${N} from rod ${s} to rod ${d}`);
    toh(N - 1, h, d, s);
    return count;
}
console.log(toh(N, s, d, h));

/*
    Approch: 
    - toh is a recursive function which will give the total numbers of steps for n numbers of disks so the hypothis is it will give the total numbers of steps for n - 1 disks (s to h)
    - so we need to take care of last disk which will be moved form s to d
    - and we need to call the toh function again for all disks which are on h to move them to d so we consider h as s wihile calling it 3rd time
*/
