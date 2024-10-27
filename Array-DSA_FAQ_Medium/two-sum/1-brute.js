// Two Sum

/* 
Given an array of integers nums and an integer target. Return the indices(0 - indexed) of two elements in nums such that they add up to target.



Each input will have exactly one solution, and the same element cannot be used twice. Return the answer in non-decreasing order.

*/

function twoSumArray(nums, target) {
  const n = nums.length;
  let ans = [0, 0];

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] + nums[j] === target) {
        ans[0] = i;
        ans[1] = j;
        return ans;
      }
    }
  }
  return -1;
}

const nums = [1, 3, 5, -7, 6, -3];
const target = 0;

const res = twoSumArray(nums, target);
console.log(`The two sum indices are ${res}`); // Example output: [1, 5]
