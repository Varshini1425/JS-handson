// Sort an array of 0's 1's and 2's

/*  
Given an array nums consisting of only 0, 1, or 2. Sort the array in non-decreasing order. The sorting must be done in-place, without making a copy of the original array.

*/

function sortZeroOneTwo(nums) {
  let cnt_0 = 0;
  let cnt_1 = 0;
  let cnt_2 = 0;
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) {
      cnt_0++;
    } else if (nums[i] === 1) {
      cnt_1++;
    } else {
      cnt_2++;
    }
  }

  for (let i = 0; i < cnt_0; i++) {
    nums[i] = 0;
  }
  for (let i = cnt_0; i < cnt_0 + cnt_1; i++) {
    nums[i] = 1;
  }
  for (let i = cnt_0 + cnt_1; i < n; i++) {
    nums[i] = 2;
  }

  return nums;
}

let nums = [2, 0, 1, 1, 0, 2];
let res = sortZeroOneTwo(nums);
console.log(`Sorted the array of zero, one, two: ${res}`);
