// Fruit Into Baskets
/*
There is only one row of fruit trees on the farm, oriented left to right. An integer array called fruits represents the trees, where fruits[i] denotes the kind of fruit produced by the ith tree.



The goal is to gather as much fruit as possible, adhering to the owner's stringent rules:



1) There are two baskets available, and each basket can only contain one kind of fruit. The quantity of fruit each basket can contain is unlimited.

2) Start at any tree, but as you proceed to the right, select exactly one fruit from each tree, including the starting tree. One of the baskets must hold the harvested fruits.

3) Once reaching a tree with fruit that cannot fit into any basket, stop.



Return the maximum number of fruits that can be picked.
*/

class Solution {
  /* Function to find the maximum
    fruits the basket can have */
  totalFruits(fruits) {
    // Length of the input array
    let n = fruits.length;

    /* Variable to store the 
        maximum length of substring*/
    let maxLen = 0;

    /* Iterate through all possible 
        starting points of the substring*/
    for (let i = 0; i < n; i++) {
      /* Use Set to track
            different types of fruits*/
      let set = new Set();

      for (let j = i; j < n; j++) {
        // Add fruit type to the set
        set.add(fruits[j]);

        /* Check if the number of different
                fruits is within the allowed limit*/
        if (set.size <= 2) {
          /* Calculate the length 
                    of current substring*/
          let len = j - i + 1;

          maxLen = Math.max(maxLen, len);
        } else break;
      }
    }

    // Return the maximum length
    return maxLen;
  }
}

let input = [3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4];
let k = 2;

// Create an instance of Solution class
let sol = new Solution();

let len = sol.totalFruits(input);

// Print the result
console.log(`Maximum fruits in the basket is: ${len}`);
