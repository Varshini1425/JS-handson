// Intersection of two sorted arrays

/* 
Given two sorted arrays nums1 and nums2, 
return an array containing the intersection of these two arrays.



The intersection of two arrays is an array 
where all values are present in both arrays.
*/

function intersectionOfSortedArray(nums1, nums2) {
  let ansResult = [];
  let visited = Array(nums2.length).fill(0);

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j] && visited[j] === 0) {
        ansResult.push(nums2[j]);
        visited[j] = 1;
        break;
      } else if (nums2[j] > nums1[i]) {
        break;
      }
    }
  }
  return ansResult;
}

const arr1 = [3, 4, 5, 6, 8, 8],
  arr2 = [2, 4, 6, 6, 6, 10];

const result = intersectionOfSortedArray(arr1, arr2);
console.log(`The intersection of two arrays is an array: ${result}`);
