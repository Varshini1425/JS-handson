// Longest Substring Without Repeating Characters

/*

Given a string, S. Find the length of the longest substring without repeating characters.

*/

class Solution {
  longestNonRepeatingSubstring(s) {
    // Length of the input string
    let n = s.length;

    // Variable to store max length
    let maxLen = 0;

    /* Iterate through all possible 
           starting points of the substring */
    for (let i = 0; i < n; i++) {
      /* Hash to track characters in 
               the current substring window */
      // Assuming extended ASCII characters
      let hash = new Array(256).fill(0);

      for (let j = i; j < n; j++) {
        /* If s[j] is already in the
                   current substring window */
        if (hash[s.charCodeAt(j)] === 1) break;

        /* Update the hash to mark s[j]
                   as present in the current window */
        hash[s.charCodeAt(j)] = 1;

        /* Calculate the length of
                   the current substring */
        let len = j - i + 1;

        /* Update maxLen if the current
                   substring length is greater */
        maxLen = Math.max(maxLen, len);
      }
    }

    // Return the maximum length
    return maxLen;
  }
}

let input = "cadbzabcd";

//Create an instance of Solution class
let sol = new Solution();

let len = sol.longestNonRepeatingSubstring(input);

// Print the result
console.log("Length of longest substring without repeating characters: " + len);
