// Two Sum

/* 
Given an array of integers nums and an integer target. Return the indices(0 - indexed) of two elements in nums such that they add up to target.



Each input will have exactly one solution, and the same element cannot be used twice. Return the answer in non-decreasing order.

*/

function twoSumArray(nums, target) {
  let map = new Map();
  let n = nums.length;
  // iterate the array
  for (let i = 0; i < n; i++) {
    // find the element
    let eleCheck = target - nums[i];

    // check if the element is already exists, if yes getting that element's indexies

    if (map.has(eleCheck)) {
      return [map.get(eleCheck), i];
    }

    // if the element is not exits store the element to hashmap
    map.set(nums[i], i);
  }
  // no pair is found
  return -1;
}

const nums = [1, 3, 5, -7, 6, -3];
const target = 0;

const res = twoSumArray(nums, target);
console.log(`The two sum indices are ${res}`);
