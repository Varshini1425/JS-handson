// Remove duplicates from sorted array

/*  Given an integer array nums sorted in non-decreasing order, 
remove all duplicates in-place so that each unique element appears only once.
 Return the number of unique elements in the array.  */

function removeDupEle(nums) {
  // If the array is empty or has only one element, return it as is
  if (nums.length <= 1) return nums;

  // Create a new array to store unique elements
  let uniqueArray = [nums[0]];

  // Iterate through the original array starting from the second element
  for (let i = 1; i < nums.length; i++) {
    // If the current element is different from the last element in uniqueArray,
    // add it to uniqueArray
    if (nums[i] !== uniqueArray[uniqueArray.length - 1]) {
      uniqueArray.push(nums[i]);
    }
  }

  // Copy unique elements back to the original array
  for (let i = 0; i < uniqueArray.length; i++) {
    nums[i] = uniqueArray[i];
  }

  // Truncate the original array to remove excess elements
  nums.length = uniqueArray.length;

  return nums;
}

const arr = [1, 1, 1, 2, 2, 2, 2, 3, 4, 4, 7, 7];
const result = removeDupEle(arr);
console.log(`After removing the duplicate element from the array: ${result}`);
