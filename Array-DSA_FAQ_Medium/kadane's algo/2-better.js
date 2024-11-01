// Kadane's algorithm

/* 
Given an integer array nums, find the subarray with the largest sum and return the sum of the elements present in that subarray.



A subarray is a contiguous non-empty sequence of elements within an array.

*/

function maxSubArray(nums) {
  let maximum = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      maximum = Math.max(maximum, sum);
    }
  }

  return maximum;
}

let nums = [2, 3, 5, -2, 7, -4];
let res = maxSubArray(nums);
console.log(`the maximum sum of the sub array: ${res}`);
