class Solution {
    /* Function to find the length of the longest 
    substring with at most k distinct characters*/
    kDistinctChar(s, k) {
        
        /* Initialize left pointer, right pointer,
        and maximum length of substring*/
        let l = 0, r = 0, maxLen = 0;
        
        // Hash map to store character frequencies
        let mpp = new Map();
        
        while (r < s.length) {
            // Increment frequency of current character
            if (mpp.has(s[r])) {
                mpp.set(s[r], mpp.get(s[r]) + 1);
            } else {
                mpp.set(s[r], 1);
            }
            
            /* If the number of distinct characters 
            exceeds k, shrink the window from the left*/
            while (mpp.size > k) {
                
                // Decrement frequency of character at left pointer
                if (mpp.has(s[l])) {
                    mpp.set(s[l], mpp.get(s[l]) - 1);
                    if (mpp.get(s[l]) === 0) {
                        
                        /* Remove character from map if
                        its frequency becomes zero*/
                        mpp.delete(s[l]);
                    }
                }
                // Move left pointer to the right
                l++;
            }
            
            /* Update maximum length of substring with 
            at most k distinct characters found so far*/
            if (mpp.size <= k) {
                maxLen = Math.max(maxLen, r - l + 1);
            }
            
            // Move right pointer
            r++;
        }
        
        // Return the maximum length found
        return maxLen;
    }
}

// Main function to test the solution
let s = "aaabbccd";

//Create an instance of Solution class
let sol = new Solution();

let res = sol.kDistinctChar(s, 2);

// Output the result
console.log(`The maximum length of substring with at most 2 distinct characters is: ${res}`);
