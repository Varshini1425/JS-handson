// Largest Element
/* Given an array of integers nums, 
return the value of the largest element in the array. */

function largestNum(nums) {
  nums.sort((a, b) => a - b);
  let largestElement = nums[nums.length - 1];
  return largestElement;
}

const arr = [18, 67, 13, 90, 1, 6, 4];
const result = largestNum(arr);
console.log(`Largest element from the array : ${result}`);
