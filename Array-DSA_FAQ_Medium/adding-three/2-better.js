// adding three
/* 
Given an integer array nums.Return all triplets such that:

i != j, i != k, and j != k
nums[i] + nums[j] + nums[k] == 0.


Notice that the solution set must not contain duplicate triplets. One element can be a part of multiple triplets. The output and the triplets can be returned in any order.
*/

function addingThree(nums) {
  // Set to store unique triplets
  let tripletSet = new Set();

  let n = nums.length;

  // Check all possible triplets
  for (let i = 0; i < n; i++) {
    // Set to store elements seen so far in the loop
    let hashset = new Set();

    for (let j = i + 1; j < n; j++) {
      // Calculate the 3rd element needed to reach target
      let third = -(nums[i] + nums[j]);

      /* Find if third element exists in 
            hashset (complements seen so far)*/
      if (hashset.has(third)) {
        // Found a triplet that sums up to target
        let temp = [nums[i], nums[j], third];

        /* Sort the triplet to ensure 
                uniqueness when storing in set*/
        temp.sort((a, b) => a - b);
        tripletSet.add(JSON.stringify(temp));
      }

      /* Insert the current element
            into hashset for future checks*/
      hashset.add(nums[j]);
    }
  }

  // Convert set to list of lists (unique triplets)
  let ans = Array.from(tripletSet).map((triplet) => JSON.parse(triplet));

  //Return the ans
  return ans;
}

let nums = [-1, 0, 1, 2, -1, -4];
const result = addingThree(nums);
console.log(`After after the tripets, should we got 0 or not ${result}`);
