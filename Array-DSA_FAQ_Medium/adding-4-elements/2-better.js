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

  let st = new Set();

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let hashset = new Set();
      for (let k = j + 1; k < n; k++) {
        let sum = nums[i] + nums[j] + nums[k];
        let fourthEle = target - sum;
        if (hashset.has(fourthEle)) {
          let temp = [nums[i], nums[j], nums[k], fourthEle].sort(
            (a, b) => a - b
          );

          st.add(temp.join());
        }

        hashset.add(nums[k]);
      }
    }
  }

  st.forEach((item) => {
    ans.push(item.split(",").map(Number));
  });
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
