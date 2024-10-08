// Left Rotate Array by One

/* Given an integer array nums, rotate the array to the left by one.  */

function leftRotateByOne(nums) {
  let n = nums.length;
  let temp = nums[0];

  for (let i = 1; i < n; i++) {
    nums[i - 1] = nums[i];
  }

  nums[n - 1] = temp;
  return nums;
}

const arr = [1, 2, 3, 4, 5, 6];
let res = leftRotateByOne(arr);
console.log(` Left Rotate Array by One: ${res}`);
