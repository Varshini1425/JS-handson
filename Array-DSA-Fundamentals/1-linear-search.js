// Linear Search

/* Given an array of integers nums and an integer target, 
find the smallest index (0 based indexing) where the target appears in the array.
 If the target is not found in the array, return -1.*/

function linearSearch(nums, target) {
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] === target) {
      return i;
    }
  }
  return -1;
}

const arr = [2, 6, 8, 4, 6, 1];
const targetNum = 8;

let result = linearSearch(arr, targetNum);
console.log(`linear search of index of the targeted number is : ${result}`);
