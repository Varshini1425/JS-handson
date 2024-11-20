class Solution {

    /*Function to find the longest substring 
    with at most k characters replaced*/
    characterReplacement(s, k) {
        /* Variable to store the maximum
        length of substring found*/
        let maxLen = 0;
        
        /* Variable to track the maximum frequency
        of any single character in the current window*/
        let maxFreq = 0;
        
        // Pointers to maintain the current window [l, r]
        let l = 0, r = 0;
        
        // Hash array to count frequencies of characters
        let hash = new Array(26).fill(0);

        // Iterate through each starting point of substring
        while (r < s.length) {
            
            /* Update frequency of current
            character in the hash array*/
            hash[s.charCodeAt(r) - 'A'.charCodeAt(0)]++;
            
            // Update max frequency encountered
            maxFreq = Math.max(maxFreq, hash[s.charCodeAt(r) - 'A'.charCodeAt(0)]);
            
            // Check if current window is invalid
            while ((r - l + 1) - maxFreq > k) {
                // Slide the left pointer to make the window valid again
                hash[s.charCodeAt(l) - 'A'.charCodeAt(0)]--;
                
                // Recalculate maxFreq for current window
                maxFreq = 0;
                for (let i = 0; i < 26; ++i) {
                    maxFreq = Math.max(maxFreq, hash[i]);
                }
                
                // Move left pointer forward
                l++;
            }
            
            /* Update maxLen with the length
            of the current valid substring*/
            maxLen = Math.max(maxLen, r - l + 1);
            
            // Move right pointer forward to expand window
            r++;
        }

        /* Return the maximum length of substring
        with at most k characters replaced*/
        return maxLen;
    }
}

let s = "AABABBA";
let k = 2;

// Create an instance of Solution class
let sol = new Solution();

let len = sol.characterReplacement(s, k);

// Print the result
console.log(`Maximum length of substring with at most ${k} characters replaced: ${len}`);
