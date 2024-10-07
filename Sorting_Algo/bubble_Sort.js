// Bubble Sort

/* 

Given an array of integers called nums,
sort the array in non-decreasing order using
the bubble sort algorithm and return the sorted array.

*/

function bubbleSort(nums) {
  let n = nums.length;
  for (let i = n - 1; i >= 0; i--) {
    let isSwapped = 0;

    for (let j = 0; j <= i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
        isSwapped += 1;
      }
    }
    if (isSwapped === 0) {
      break;
    }
    console.log("iteration  " + i);
  }
  return nums;
}

const arrElement = [6, 8, 5, 2, 1, 3];
// const arrElement = [1, 2, 3, 4, 5, 6];
let res = bubbleSort(arrElement);
console.log(`Thus the array is sorted in non-decreasing order: ${res}`);
