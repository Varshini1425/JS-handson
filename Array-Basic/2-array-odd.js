// count of odd elements

// APPROACH 1

// function odd(arr, n) {
//   let filterEvenNum = arr.filter((num) => num % 2 !== 0).sort((a, b) => a - b);
//   return filterEvenNum.length;
// }

// APPROACH 2
function odd(arr, n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] % 2 !== 0) {
      count++;
    }
  }
  return count;
}

const arr = [1, 2, 3, 4, 5, 6, 7];

const n = arr.length;

const res = odd(arr, n);
console.log("count of odd elements " + res);
