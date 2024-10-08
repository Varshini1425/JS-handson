// Maximum Consecutive Ones
/* Given a binary array nums, return the maximum number of consecutive 1s in the array.



A binary array is an array that contains only 0s and 1s. */

function consecutive_one(nums) {
  let n = nums.length;
  let count = 0;
  let maximum = 0;

  for (let i = 0; i < n; i++) {
    if (nums[i] === 1) {
      count++;
      maximum = Math.max(maximum, count);
    } else {
      count = 0;
    }
  }
  return maximum;
}

const arr = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1];
let res = consecutive_one(arr);
console.log(`The maximum consecutive one's in the binary array : ${res}`);
