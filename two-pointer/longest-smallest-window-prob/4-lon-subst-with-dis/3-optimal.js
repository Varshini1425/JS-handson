class Solution {
    
    /*Function to find the maximum length of 
    substring with at most k distinct characters*/
    kDistinctChar(s, k) {
        
        // Length of the input string
        let n = s.length;  
        
        /* Variable to store the 
        maximum length of substring */
        let maxLen = 0;  
        
        /* Map to track the count of each
        character in the current window */
        let mpp = new Map();
        
        // Pointers for the sliding window approach
        let l = 0, r = 0;
        
        while(r < n){
            let charR = s[r];
            mpp.set(charR, (mpp.get(charR) || 0) + 1);
            
            /* If number of different characters exceeds
             k, shrink the window from the left*/
            if(mpp.size > k){
                let charL = s[l];
                mpp.set(charL, mpp.get(charL) - 1);
                if(mpp.get(charL) === 0){
                    mpp.delete(charL);
                }
                l++;
            }
            
            /* If number of different characters 
            is at most k, update maxLen*/
            if(mpp.size <= k){
                maxLen = Math.max(maxLen, r - l + 1);
            }
            
            r++;
        }
        
        // Return the maximum length
        return maxLen;
    }
}

// Main function
let sol = new Solution();
let s = "aaabbccd";  
let k = 2;

let len = sol.kDistinctChar(s, k);

// Print the result
console.log(`Maximum length of substring with at most ${k} distinct characters: ${len}`);
