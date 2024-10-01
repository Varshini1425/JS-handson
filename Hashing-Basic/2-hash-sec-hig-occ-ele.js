// Find the second highest occurring element

function secondMostFreqEle(arr) {
  let noOfEle = arr.length;

  let maxFreq = 0;
  let secMaxFreq = 0;

  let maxEle = -1;
  let secMaxEle = -1;

  let visited = new Array(noOfEle).fill(false);

  for (let i = 0; i < noOfEle; i++) {
    if (visited[i]) continue;

    let freq = 0;

    for (let j = i; j < noOfEle; j++) {
      if (arr[i] === arr[j]) {
        freq++;
        visited[j] = true;
      }
    }

    if (freq > maxFreq) {
      secMaxFreq = maxFreq;
      maxFreq = freq;
      secMaxEle = maxEle;
      maxEle = arr[i];
    } else if (freq === maxFreq) {
      maxEle = Math.min(maxEle, arr[i]);
    } else if (freq > secMaxFreq) {
      secMaxFreq = freq;
      secMaxEle = arr[i];
    } else if (freq === secMaxFreq) {
      secMaxEle = Math.min(secMaxEle, arr[i]);
    }
  }

  return secMaxEle;
}

const nums = [1, 2, 2, 3, 3, 3];
let result = secondMostFreqEle(nums);
console.log(`The second most frequency element: ${result}`);
