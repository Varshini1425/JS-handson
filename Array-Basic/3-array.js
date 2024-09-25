// Reverse an array

// APPROACH 1
// function sum(arr, n) {
//   let reversedArray = arr.reverse();
//   return reversedArray;
// }

// APPROACH 2
function sum(arr, n) {
  // created a new array to store the reversed array
  let newArray = new Array(n);

  // copying the original array elements in the reverse order
  for (let i = n - 1; i >= 0; i--) {
    newArray[n - i - 1] = arr[i];
  }
  for (let i = 0; i < n; i++) {
    newArray[i] = arr[i];
  }

  return;
}

const arr = [12, 55, 78, 45, 32];

const n = arr.length;

const res = sum(arr, n);
console.log("Reverse an array " + res);
// Refer the TUF
