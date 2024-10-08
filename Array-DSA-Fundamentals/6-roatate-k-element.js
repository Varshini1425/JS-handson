// Left Rotate Array by K Places
/* 
Given an integer array nums and a non-negative integer k,
rotate the array to the left by k steps.
 */

function rotateKElements(nums, k) {
  let n = nums.length;
  let temp = [];

  k = k % n;

  for (let i = 0; i < k; i++) {
    temp.push(nums[i]);
  }

  for (let i = k; i < n; i++) {
    nums[i - k] = nums[i];
  }

  for (let i = 0; i < k; i++) {
    nums[n - k + i] = temp[i];
  }
  return nums;
}

const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
let result = rotateKElements(nums, k);
console.log(`Left Rotate Array by K Places: ${result}`);
