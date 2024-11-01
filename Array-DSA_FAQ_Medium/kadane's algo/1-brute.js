// Kadane's algorithm

function maxSubArray(nums) {
  let maximum = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      let sum = 0;
      for (let k = i; k <= j; k++) {
        sum += nums[k];
      }
      maximum = Math.max(maximum, sum);
    }
  }

  return maximum;
}

let nums = [2, 3, 5, -2, 7, -4];
let res = maxSubArray(nums);
console.log(`the maximum sum of the sub array: ${res}`);
