// 4 Sum

/*  
Given an integer array nums and an integer target. Return all quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

·      a, b, c, d are all distinct valid indices of nums.

·      nums[a] + nums[b] + nums[c] + nums[d] == target.



Notice that the solution set must not contain duplicate quadruplets. One element can be a part of multiple quadruplets. The output and the quadruplets can be returned in any order.
*/

function adding4EleEqaToTarget(nums, target) {
  let ans = [];
  let n = nums.length;

  // Sort the array to help with the two-pointer approach
  nums.sort((a, b) => a - b);

  // Iterate through the array with two outer loops
  for (let i = 0; i < n - 3; i++) {
    // Skip duplicates for i
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    for (let j = i + 1; j < n - 2; j++) {
      // Skip duplicates for j
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;

      // Initialize two pointers for the remaining elements
      let k = j + 1;
      let l = n - 1;

      while (k < l) {
        let sum = nums[i] + nums[j] + nums[k] + nums[l];

        if (sum === target) {
          // Found a valid quadruplet
          ans.push([nums[i], nums[j], nums[k], nums[l]]);

          // Move pointers and skip duplicates
          k++;
          l--;
          while (k < l && nums[k] === nums[k - 1]) k++;
          while (k < l && nums[l] === nums[l + 1]) l--;
        } else if (sum < target) {
          k++; // Move k to increase the sum
        } else {
          l--; // Move l to decrease the sum
        }
      }
    }
  }

  return ans;
}

const nums = [4, 3, 3, 4, 4, 2, 1, 2, 1, 1];
const target = 9;
let res = adding4EleEqaToTarget(nums, target);
if (res.length > 0) {
  console.log(
    `The sum of quadruplets equal to the target is: ${JSON.stringify(res)}`
  );
} else {
  console.log("No quadruplets found.");
}
