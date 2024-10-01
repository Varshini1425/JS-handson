// Sum of highest and lowest frequency

function sumOfHighestAndLowestFreq(nums) {
  let n = nums.length;
  let maxFreq = 0;
  let minFreq = n;

  let visited = new Array(n).fill(false);

  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;

    let freq = 0;

    for (let j = i; j < n; j++) {
      if (nums[i] === nums[j]) {
        freq++;
        visited[j] = true;
      }
    }

    maxFreq = Math.max(maxFreq, freq);
    minFreq = Math.min(minFreq, freq);
  }

  return maxFreq + minFreq;
}

const arrEle = [1, 2, 2, 3, 3, 3];

let result = sumOfHighestAndLowestFreq(arrEle);

console.log(`The sum of highest and lowest freq num: ${result}`);
