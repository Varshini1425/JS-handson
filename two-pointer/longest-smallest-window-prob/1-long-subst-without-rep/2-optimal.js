// Longest Substring Without Repeating Characters

/*

Given a string, S. Find the length of the longest substring without repeating characters.

*/

class Solution {
  /* Function to find the longest substring
       without repeating characters */
  longestNonRepeatingSubstring(s) {
    let n = s.length;

    // Assuming all ASCII characters
    let HashLen = 256;

    /* Hash table to store last
           occurrence of each character */
    let hash = new Array(HashLen).fill(-1);

    /* Initialize hash table with
           -1 (indicating no occurrence) */
    for (let i = 0; i < HashLen; ++i) {
      hash[i] = -1;
    }

    let l = 0,
      r = 0,
      maxLen = 0;
    while (r < n) {
      /* If current character s[r] 
               is already in the substring */
      if (hash[s.charCodeAt(r)] != -1) {
        /* Move left pointer to the right
                   of the last occurrence of s[r] */
        l = Math.max(hash[s.charCodeAt(r)] + 1, l);
      }

      // Calculate the current substring length
      let len = r - l + 1;

      // Update maximum length found so far
      maxLen = Math.max(len, maxLen);

      /* Store the index of the current
               character in the hash table */
      hash[s.charCodeAt(r)] = r;

      // Move right pointer to next position
      r++;
    }

    // Return the maximum length found
    return maxLen;
  }
}

// Main function
let s = "cadbzabcd";
let sol = new Solution();
let result = sol.longestNonRepeatingSubstring(s);

// Output the maximum length
console.log("The maximum length is:");
console.log(result);
