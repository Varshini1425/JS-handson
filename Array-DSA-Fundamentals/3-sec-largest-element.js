// Second Largest Element
/* Given an array of integers nums, return the second-largest element in the array. 
If the second-largest element does not exist, return -1. */

function secLargestEle(nums) {
  let n = nums.length;
  if (n < 0) {
    return -1;
  }

  nums.sort((a, b) => a - b);
  let largest = nums[n - 1];
  let secondLargest = -1;

  for (let i = n - 2; i >= 0; i--) {
    if (nums[i] !== largest) {
      secondLargest = nums[i];

      break;
    }
  }
  return secondLargest;
}

const arr = [18, 67, 13, 90, 1, 6, 4];
const result = secLargestEle(arr);
console.log(`second largest element from the array : ${result}`);
