class Solution {
    /*Function to find the minimum length substring
    in string s that contains all characters from string t.*/
    minWindow(s, t) {
        
        /* Variable to store the minimum
        length of substring found*/
        let minLen = Infinity;
        
        /* Variable to store the starting index
        of the minimum length substring*/
        let sIndex = -1;
        
        /* Array to count frequencies
        of characters in string t*/
        let hash = new Array(256).fill(0);
        for (let c of t) {
            hash[c.charCodeAt(0)]++;
        }
        
        /* Initialize count to track the number of
        characters from t found in current window of s*/
        let count = 0;
        
        // Iterate through string s
        for (let i = 0; i < s.length; ++i) {
            // Reset array for counting current window
            let currentHash = hash.slice();
            
            count = 0;
            
            // Iterate through current window 
            for (let j = i; j < s.length; ++j) {
                if (currentHash[s.charCodeAt(j)] > 0) {
                    count++;
                }
                currentHash[s.charCodeAt(j)]--;
                
                /* If all characters from t 
                are found in current window*/
                if (count === t.length) {
                    
                    /* Update minLen and sIndex
                    if current window is smaller*/
                    if (j - i + 1 < minLen) {
                        minLen = j - i + 1;
                        sIndex = i;
                    }
                    break; 
                }
            }
        }
        
        // Return the minimum length substring from s
        return (sIndex === -1) ? "" : s.substring(sIndex, sIndex + minLen);
    }
}

let s = "ddaaabbca";
let t = "abc";

// Create an instance of Solution class
let sol = new Solution();

let ans = sol.minWindow(s, t);

// Print the result
console.log(`Minimum length substring containing all characters from "${t}" is: ${ans}`);
