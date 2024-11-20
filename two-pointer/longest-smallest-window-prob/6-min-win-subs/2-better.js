class Solution {
    /* Function to find the minimum length 
    substring in string s that contains
    all characters from string t. */
    minWindow(s, t) {
        
        /* Variable to store the minimum 
        length of substring found */
        let minLen = Infinity;
        
        /* Variable to store the starting index
        of the minimum length substring */
        let sIndex = -1;
        
        /* Array to count frequencies
        of characters in string t*/
        let hash = new Array(256).fill(0);
        
        // Count the frequencies of characters in t
        for (let c of t) {
            hash[c.charCodeAt(0)]++;
        }
            
        let count = 0;
        let l = 0, r = 0;
        
        // Iterate through current window 
        while (r < s.length) {
            // Include the current character in the window
            if (hash[s.charCodeAt(r)] > 0) {
                count++;
            }
            hash[s.charCodeAt(r)]--;
                
            /* If all characters from t 
            are found in current window */
            while (count === t.length) {
                    
                /* Update minLen and sIndex
                if current window is smaller */
                if (r - l + 1 < minLen) {
                    minLen = r - l + 1;
                    sIndex = l;
                }
                
                // Remove leftmost character from window
                hash[s.charCodeAt(l)]++;
                if (hash[s.charCodeAt(l)] > 0) {
                    count--;
                }
                l++;
            }
            r++;
        }
        
        // Return minimum length substring from s
        return (sIndex === -1) ? "" : s.substr(sIndex, minLen);
    }
}

// Test the Solution class
let s = "ddaaabbca";
let t = "abc";

// Create an instance of Solution class
let sol = new Solution();

let ans = sol.minWindow(s, t);

// Print the result
console.log(`Minimum length substring containing all characters from "${t}" is: ${ans}`);
