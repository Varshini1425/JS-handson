// Leaders in an Array

/* 
Given an integer array nums, return a list of all the leaders in the array.



A leader in an array is an element whose value is strictly greater 
than all elements to its right in the given array. 
The rightmost element is always a leader. 
The elements in the leader array must appear in the order they appear in the nums array.
*/

function leadersInTheArray(nums) {
  let n = nums.length;
  let ans = [];

  for (let i = 0; i < n; i++) {
    let leaders = true;

    for (let j = i + 1; j < n; j++) {
      if (nums[j] > nums[i]) {
        leaders = false;
        break;
      }
    }
    if (leaders) {
      ans.push(nums[i]);
    }
  }

  return ans;
}

const arr = [1, 2, 5, 3, 1, 2];
const result = leadersInTheArray(arr);

console.log(`The leaders in the array is: ${result}`);
