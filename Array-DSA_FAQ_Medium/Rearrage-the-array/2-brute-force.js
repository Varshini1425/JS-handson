// Rearrange array elements by sign

/* 
Given an integer array nums of even length consisting of an equal number of positive and negative integers.Return the answer array in such a way that the given conditions are met:



Every consecutive pair of integers have opposite signs.
For all integers with the same sign, the order in which they were present in nums is preserved.
The rearranged array begins with a positive integer.
*/

function rearrangeBySign(nums) {
  let pos = [];
  let neg = [];

  nums.forEach((num) => {
    if (num > 0) {
      pos.push(num);
    } else {
      neg.push(num);
    }
  });

  for (let i = 0; i < nums.length / 2; i++) {
    nums[2 * i] = pos[i];
    nums[2 * i + 1] = neg[i];
  }

  return nums;
}

const arr = [2, 4, 5, -1, -3, -4];
const res = rearrangeBySign(arr);
console.log(`Rearrange array elements by sign: ${res}`);
