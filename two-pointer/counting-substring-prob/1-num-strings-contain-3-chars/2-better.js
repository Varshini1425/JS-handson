class Solution {
    /* Function to find the number of substrings 
    containing all characters 'a', 'b', 'c' in string s. */
    numberOfSubstrings(s) {
        
        /* Array to store the last seen
        index of characters 'a', 'b', 'c'*/
        let lastSeen = [-1, -1, -1];
        
        let count = 0;
        
        // Iterate through each character in string s
        for (let i = 0; i < s.length; ++i) {
            
            // Update lastSeen index for current character
            lastSeen[s.charCodeAt(i) - 'a'.charCodeAt(0)] = i;
            
            /* Check if all characters 'a',
            'b', 'c' have been seen*/
            if (lastSeen[0] !== -1 && lastSeen[1] !== -1 && lastSeen[2] !== -1) {
                
                /* Count valid substrings
                ending at current index*/
                count += 1 + Math.min(lastSeen[0], lastSeen[1], lastSeen[2]);
            }
        }
        
        // Return the total count of substrings
        return count;
    }
}

// Test the solution
let s = "bbacba";

// Create an instance of Solution class
let sol = new Solution();

let ans = sol.numberOfSubstrings(s);

// Print the result
console.log(`Number of substrings containing 'a', 'b', 'c' in "${s}" is: ${ans}`);
