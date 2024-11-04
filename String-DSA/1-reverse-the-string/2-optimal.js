class Solution {
  // Helper function to reverse the string
  reverseString(s, start, end) {
    // Reversing the string character by character
    while (start < end) {
      let temp = s[start];
      s[start] = s[end];
      s[end] = temp;
      start++;
      end--;
    }
  }

  // Function to reverse every word in the given string
  reverseWords(s) {
    let arr = s.split(""); // Convert to array to allow modification
    let n = arr.length; // Length of string

    // Reverse the complete string
    this.reverseString(arr, 0, n - 1);

    let start = 0,
      end = 0;
    let i = 0,
      j = 0;

    while (j < n) {
      // Skip any white spaces
      while (j < n && arr[j] === " ") j++;

      start = i; // Store the start of the word

      // Until the word ends
      while (j < n && arr[j] !== " ") {
        arr[i] = arr[j]; // Shift the characters
        i++;
        j++;
      }

      end = i - 1; // Store the end of the word

      // Reverse the word found
      this.reverseString(arr, start, end);

      // Adding a space after every word
      arr[i++] = " ";
    }

    // Return the result containing all words
    return arr.slice(0, end + 1).join("");
  }
}

// Creating an instance of Solution class
const sol = new Solution();

let s = " amazing coding skills ";

// Function call to reverse every word in the given string
let ans = sol.reverseWords(s);

// Output
console.log("Input string:", s);
console.log("After reversing every word:", ans);
