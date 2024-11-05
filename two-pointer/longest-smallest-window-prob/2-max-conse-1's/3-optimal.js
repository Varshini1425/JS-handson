// Max Consecutive Ones III

/*
Given a binary array nums and an integer k, flip at most k 0's.

Return the maximum number of consecutive 1's after performing the flipping operation.
*/

class Solution {
  /*Function to find the length of the
    longest substring with at most k zeros*/
  longestOnes(nums, k) {
    // Length of the input array
    let n = nums.length;

    // Pointers for sliding window approach
    let l = 0,
      r = 0;

    /* Variables to count zeros
        and store maximum length */
    let zeros = 0,
      maxLen = 0;

    /* Iterate through the array 
        using sliding window approach */
    while (r < n) {
      if (nums[r] == 0) zeros++;

      if (zeros > k) {
        if (nums[l] == 0) {
          /* Decrement zeros count
                    when moving left pointer */
          zeros--;
        }
        l++;
      }
      if (zeros <= k) {
        /* Calculate the length 
                of current substring */
        let len = r - l + 1;

        /* Update maxLen if the current
                substring length is greater */
        maxLen = Math.max(maxLen, len);
      }
      r++;
    }

    // Return the maximum length
    return maxLen;
  }
}

let input = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
let k = 2;

// Create an instance of Solution class
let sol = new Solution();

let len = sol.longestOnes(input, k);

// Print the result
console.log(`Length of longest substring with at most ${k} zeros: ${len}`);
