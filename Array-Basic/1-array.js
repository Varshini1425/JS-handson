// sum of elements of the array

const arr = [1, 2, 3, 4, 5];
const n = arr.length;

let sumOfEle = 0;
function sum(arr, n) {
  for (let i = 0; i < n; i++) {
    sumOfEle += arr[i];
  }
  return sumOfEle;
}

let res = sum(arr, n);
console.log("sum of elements of the array " + res);
