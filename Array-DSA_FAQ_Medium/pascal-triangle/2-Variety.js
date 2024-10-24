class Solution {
  // Function to calculate nCr (combinations)
  nCr(n, r) {
    /*
        Calculate nCr using iterative
        method to avoid overflow
        */
    let res = 1;
    for (let i = 0; i < r; i++) {
      res = res * (n - i);
      res = Math.floor(res / (i + 1));
    }
    return res;
  }

  /* Function to print Pascal's
    Triangle row for given n */
  generate(n) {
    /*
        Print the entire row of 
        Pascal's Triangle for row n:
        */
    for (let c = 1; c <= n; c++) {
      process.stdout.write(this.nCr(n - 1, c - 1) + " ");
    }
    process.stdout.write("\n");
  }
}

// Main execution block
let n = 5;

// Create an instance of the Solution class
let sol = new Solution();

// Print Pascal's Triangle row for row n
sol.generate(n);
