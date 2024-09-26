// Function to reverse array using an auxiliary array
function reverse(arr) {
  let n = arr.length;
  let ans = new Array(n);

  // Fill new array with elements of original array in reverse order
  for (let i = n - 1; i >= 0; i--) {
    ans[n - i - 1] = arr[i];
  }

  // Copy the elements back to the original array
  for (let i = 0; i < n; i++) {
    arr[i] = ans[i];
  }
}

// Function to print array
function printArray(arr) {
  console.log(arr.join(" "));
}

const arr = [5, 4, 3, 2, 1];

console.log("Original array: ");
printArray(arr);

// Function call to reverse the array
reverse(arr);

console.log("Reversed array: ");
printArray(arr);
