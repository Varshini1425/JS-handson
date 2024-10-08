// Insertion Sorting

/*  Given an array of integers called nums,
 sort the array in non-decreasing order using
the insertion sort algorithm and return the sorted array.



A sorted array in non-decreasing order is an array 
where each element is greater than or equal 
to all preceding elements in the array.
*/

function insertionSort(nums) {
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    let j = i;
    while (j > 0 && nums[j - 1] > nums[j]) {
      [nums[j - 1], nums[j]] = [nums[j], nums[j - 1]];
      j--;
    }
  }

  return nums;
}

const arrElement = [14, 9, 15, 12, 6, 8, 13];

let result = insertionSort(arrElement);

console.log(`Thus the array is sorted in non-decreasing order: ${result}`);
