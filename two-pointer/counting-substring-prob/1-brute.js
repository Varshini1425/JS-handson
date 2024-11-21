class Solution {
    /* Function to find the number of substrings 
    containing all characters 'a', 'b', 'c' in string s. */
    numberOfSubstrings(s) {
        let count = 0;
        
        // Iterate through each starting point of substring
        for (let i = 0; i < s.length; ++i) {
            
            // Array to track presence of 'a', 'b', 'c'
            let hash = [0, 0, 0];
            
            // Iterate through each ending point of substring
            for (let j = i; j < s.length; ++j) {
                
                // Mark current character in hash
                hash[s.charCodeAt(j) - 'a'.charCodeAt(0)] = 1;
                
                /* Check if all characters
                'a', 'b', 'c' are present*/
                if (hash[0] + hash[1] + hash[2] === 3) {
                    
                    // Increment count for valid substring
                    count++; 
                }
            }
        }
        // Return the total count of substrings
        return count;
    }
}

let s = "bbacba";

// Create an instance of Solution class
let sol = new Solution();

let ans = sol.numberOfSubstrings(s);

// Print the result
console.log(`Number of substrings containing 'a', 'b', 'c' in "${s}" is: ${ans}`);

