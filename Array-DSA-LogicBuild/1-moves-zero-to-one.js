// Move Zeros to End

/* 
Given an integer array nums, move all the 0's to the end of the array.
The relative order of the other elements must remain the same. 
This must be done in place, without making a copy of the array.
*/

function movesZeroToOne(nums) {
  // Takes nums length in the array
  let n = nums.length;
  // the length of an arrya filled with zero temporarily
  let temp = Array(n).fill(0);
  // intialized count to 0
  let count = 0;

  // Fill the non zero numbers to temp variable
  for (let i = 0; i < n; i++) {
    if (nums[i] !== 0) {
      temp[count++] = nums[i];
    }
  }

  // copied numbers from the temp replaced to the original array
  for (let i = 0; i < count; i++) {
    nums[i] = temp[i];
  }

  // fill remaining ele to 0
  for (let i = count; i < n; i++) {
    nums[i] = 0;
  }

  return nums;
}

const arr = [78, 54, 1, 0, 0, 49, 13, 0, 8, 2, 0];

const result = movesZeroToOne(arr);
console.log(`The given array of zeroes moves to the end: ${result}`);
