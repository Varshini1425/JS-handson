// Highest occurring element in an array

function mostFreqElement(arr) {
  // variable to store the size of an array
  let n = arr.length;

  // variable to store the maximum freq
  let maxFreq = 0;

  // variable to store the maximum freq of the ele
  let maxEle = 0;

  // visited array
  let visited = new Array(n).fill(false);

  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;

    let freq = 0;

    for (let j = i; j < n; j++) {
      if (arr[i] == arr[j]) {
        freq++;
        visited[j] = true;
      }
    }

    if (freq > maxFreq) {
      maxFreq = freq;
      maxEle = arr[i];
    } else if (freq == maxFreq) {
      maxEle = Math.min(maxEle, arr[i]);
    }
  }

  return maxEle;
}

const arrEle = [1, 2, 3, 3, 3, 4, 5];

let result = mostFreqElement(arrEle);

console.log(`The highest occuring element in the array is : ${result}`);
