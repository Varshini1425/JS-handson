// Find missing number
/* 
Given an integer array of size n containing distinct values in the range from 0 to n (inclusive),
 return the only number missing from the array within this range.
*/

function missingNumber(nums) {
  let n = nums.length;
  for (let i = 0; i <= n; i++) {
    let flag = 0;

    for (let j = 0; j < n; j++) {
      if (nums[j] === i) {
        flag = 1;
        break;
      }
    }

    if (flag === 0) {
      return i;
    }
  }

  return -1;
}

const arr = [0, 2, 3, 4, 5, 6, 7];
const result = missingNumber(arr);
console.log(`the missing number in the array is: ${result}`);
