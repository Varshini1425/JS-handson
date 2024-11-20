class Solution {
    
    /* Function to find the longest substring
    with at most k characters replaced.*/
    characterReplacement(s, k) {
        
        /* Variable to store the maximum
        length of substring found*/
        let maxLen = 0;
        
        /* Variable to track the maximum frequency of 
        any single character in the current window*/
        let maxFreq = 0;

        // Iterate through each starting point of the substring
        for (let i = 0; i < s.length; ++i) {
            
            // Initialize hash array for character frequencies
            let hash = new Array(26).fill(0);

            for (let j = i; j < s.length; ++j) {
                
                /* Update frequency of current
                character in the hash array*/
                hash[s.charCodeAt(j) - 'A'.charCodeAt(0)]++;

                // Update max frequency encountered
                maxFreq = Math.max(maxFreq, hash[s.charCodeAt(j) - 'A'.charCodeAt(0)]);

                // Calculate the number of changes needed to make
                let changes = (j - i + 1) - maxFreq;

                /* If the number of changes is less than or 
                equal to k, the current window is valid*/
                if (changes <= k) {
                    maxLen = Math.max(maxLen, j - i + 1);
                } 
                else break;
            }
        }

        /* Return the maximum length of substring
        with at most k characters replaced*/
        return maxLen;
    }
}

// Example usage:
let s = "AABABBA";
let k = 2;

// Create an instance of Solution class
let sol = new Solution();

let len = sol.characterReplacement(s, k);

// Print the result
console.log(`Maximum length of substring with at most ${k} characters replaced: ${len}`);
