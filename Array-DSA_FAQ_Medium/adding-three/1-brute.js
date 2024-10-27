// adding three
/* 
Given an integer array nums.Return all triplets such that:

i != j, i != k, and j != k
nums[i] + nums[j] + nums[k] == 0.


Notice that the solution set must not contain duplicate triplets. One element can be a part of multiple triplets. The output and the triplets can be returned in any order.
*/

function addingThree(nums) {
  let n = nums.length;
  let set = new Set();

  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; i++) {
      for (let k = j + 1; k < n; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          let temp = [nums[i], nums[j], nums[k]];
          temp.sort((a, b) => a - b);

          set.add(temp.join(","));
        }
      }
    }
  }

  // Convert set to array of arrays (unique triplets)
  let ans = Array.from(tripletSet).map((triplet) =>
    triplet.split(",").map((num) => parseInt(num))
  );

  // Return the ans
  return ans;
}

const nums = [2, -2, 0, 3, -3, 5];
const result = addingThree(nums);
console.log(`After after the tripets, should we got 0 or not ${result}`);
