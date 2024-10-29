// adding three
/* 
Given an integer array nums.Return all triplets such that:

i != j, i != k, and j != k
nums[i] + nums[j] + nums[k] == 0.


Notice that the solution set must not contain duplicate triplets. One element can be a part of multiple triplets. The output and the triplets can be returned in any order.
*/

function addingThree(nums) {
  let ans = [];

  nums.sort((a, b) => a - b);
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    let j = i + 1;
    let k = n - 1;

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];

      if (sum < 0) {
        j++;
      } else if (sum > 0) {
        k--;
      } else {
        let tempVal = [nums[i], nums[j], nums[k]];
        ans.push(tempVal);

        j++;
        k--;

        while (j < k && nums[j] === nums[j - 1]) j++;
        while (j < k && nums[k] === nums[k + 1]) k--;
      }
    }
  }
  return ans.join("  |  ");
}

let nums = [-1, 0, 2, -2, 0, 0, 2, -1, -2, 2, 2, -2, -1];
const result = addingThree(nums);
console.log(`After after the tripets, should we got 0 or not:  ${result}`);
