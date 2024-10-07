// Selection Sort

/* Given an array of integers nums, 
sort the array in non-decreasing order using 
the selection sort algorithm and return the sorted array. */

function selectionSort(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    let minmumValue = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[minmumValue]) {
        minmumValue = j;
      }
    }

    if (nums[minmumValue] != nums[i]) {
      [nums[i], nums[minmumValue]] = [nums[minmumValue], nums[i]];
    }
  }

  return nums;
}

const arr = [5, 4, 4, 1, 1];

let result = selectionSort(arr);

console.log(`Thus the array is sorted in non-decreasing order: ${result}`);
