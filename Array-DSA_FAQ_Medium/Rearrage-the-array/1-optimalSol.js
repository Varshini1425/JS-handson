// Rearrange array elements by sign

/* 
Given an integer array nums of even length consisting of an equal number of positive and negative integers.Return the answer array in such a way that the given conditions are met:



Every consecutive pair of integers have opposite signs.
For all integers with the same sign, the order in which they were present in nums is preserved.
The rearranged array begins with a positive integer.
*/

function rearrangeBySign(nums) {
  let n = nums.length;
  let posIndex = 0,
    negIndex = 1;
  let ans = Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      ans[posIndex] = nums[i];
      posIndex += 2;
    } else {
      ans[negIndex] = nums[i];
      negIndex += 2;
    }
  }
  return ans;
}

const arr = [2, 4, 5, -1, -3, -4];
const res = rearrangeBySign(arr);
console.log(`Rearrange array elements by sign: ${res}`);
