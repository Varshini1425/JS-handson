// Sort an array of 0's 1's and 2's

/*  
Given an array nums consisting of only 0, 1, or 2. Sort the array in non-decreasing order. The sorting must be done in-place, without making a copy of the original array.

*/

function sortZeroOneTwo(nums) {
  nums.sort((a, b) => a - b);
  return nums;
}

let nums = [2, 0, 1, 1, 0, 2];
let res = sortZeroOneTwo(nums);
console.log(`Sorted the array of zero, one, two: ${res}`);
