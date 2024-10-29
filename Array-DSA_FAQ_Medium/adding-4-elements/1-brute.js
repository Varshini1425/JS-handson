// 4 Sum

/*  
Given an integer array nums and an integer target. Return all quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

·      a, b, c, d are all distinct valid indices of nums.

·      nums[a] + nums[b] + nums[c] + nums[d] == target.



Notice that the solution set must not contain duplicate quadruplets. One element can be a part of multiple quadruplets. The output and the quadruplets can be returned in any order.
*/

function adding4EleEqaToTarget(nums, target) {
  let set = new Set();
  let n = nums.length;

  for (let i = 0; i < n - 3; i++) {
    for (let j = i + 1; j < n - 2; j++) {
      for (let k = j + 1; k < n - 1; k++) {
        for (let l = k + 1; l < n; l++) {
          let sum = nums[i] + nums[j] + nums[k] + nums[l];

          if (sum === target) {
            const temp = [nums[i], nums[j], nums[k], nums[l]];

            temp.sort((a, b) => a - b);
            set.add(temp.join(","));
          }
        }
      }
    }
  }
  const ans = Array.from(set).map((item) => item.split(",").map(Number));
  return ans;
}

const nums = [1, 1, 3, 4, -3];
const target = 5;
let res = adding4EleEqaToTarget(nums, target);
if (res.length > 0) {
  console.log(
    `The sum of quadruplets equal to the target is: ${JSON.stringify(res)}`
  );
} else {
  console.log("No quadruplets found.");
}
