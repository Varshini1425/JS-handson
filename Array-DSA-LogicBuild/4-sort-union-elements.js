// Union of two sorted arrays

/* 
Given two sorted arrays nums1 and nums2,
return an array that contains the union of these two arrays.
The elements in the union must be in ascending order.
*/

function unionOfSortedArray(nums1, nums2) {
  let set = new Set();
  let unionArray = [];

  for (let values of nums1) {
    set.add(values);
  }

  for (let values of nums2) {
    set.add(values);
  }

  unionArray = Array.from(set);

  unionArray.sort((a, b) => a - b);

  return unionArray;
}

const arr1 = [3, 4, 7, 7, 9, 9, 10],
  arr2 = [1, 3, 5, 8];

const result = unionOfSortedArray(arr1, arr2);
console.log(`The union of the sorted array is: ${result}`);
