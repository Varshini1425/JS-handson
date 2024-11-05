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
        maximum length of substring */
    let maxLen = 0;

    /* Map to track the count of each
        fruit type in the current window */
    let mpp = new Map();

    // Pointers for the sliding window approach
    let l = 0,
      r = 0;

    while (r < n) {
      mpp.set(fruits[r], (mpp.get(fruits[r]) || 0) + 1);

      /* If number of different fruits exceeds
             2 shrink the window from the left */
      if (mpp.size > 2) {
        mpp.set(fruits[l], mpp.get(fruits[l]) - 1);
        if (mpp.get(fruits[l]) === 0) {
          mpp.delete(fruits[l]);
        }
        l++;
      }

      /* If number of different fruits 
            is at most 2, update maxLen */
      if (mpp.size <= 2) {
        maxLen = Math.max(maxLen, r - l + 1);
      }

      r++;
    }

    // Return the maximum fruit
    return maxLen;
  }
}

let input = [3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4];

// Create an instance of Solution class
let sol = new Solution();

let len = sol.totalFruits(input);

// Print the result
console.log(`Maximum fruits the basket can have: ${len}`);
