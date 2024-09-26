// check the given array elements are sorted or not

function arraySortOrNot(arr, n) {
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] > arr[j]) {
        return false;
      }
    }

    return true;
  }
}

// case 1
// const arr = [34, 78, 44, 90, 12];

// case 2
const arr = [1, 2, 3, 4, 5];

const n = arr.length;

const res = arraySortOrNot(arr, n);
console.log("Is array is sorted/not: " + res);
