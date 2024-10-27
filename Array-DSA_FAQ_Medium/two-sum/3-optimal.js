// Two Sum

/* 
Given an array of integers nums and an integer target. Return the indices(0 - indexed) of two elements in nums such that they add up to target.



Each input will have exactly one solution, and the same element cannot be used twice. Return the answer in non-decreasing order.

*/

function twoSumSorted(nums, target) {
  // Store the original indices before sorting the array
  const indexedNums = nums.map((num, index) => ({ num, index }));

  // Sort the array based on the values
  indexedNums.sort((a, b) => a.num - b.num);

  let left = 0;
  let right = indexedNums.length - 1;

  while (left < right) {
    const sum = indexedNums[left].num + indexedNums[right].num;

    if (sum === target) {
      // Return the original indices in non-decreasing order
      return [
        Math.min(indexedNums[left].index, indexedNums[right].index),
        Math.max(indexedNums[left].index, indexedNums[right].index),
      ];
    } else if (sum < target) {
      left++; // Move left pointer to the right
    } else {
      right--; // Move right pointer to the left
    }
  }

  // If no solution is found
  return [-1, -1];
}

const nums = [1, 3, 5, -7, 6, -3];
const target = 0;

const res = twoSumSorted(nums, target);
console.log(`The two sum indices are ${res}`); // Example output: [1, 5]
