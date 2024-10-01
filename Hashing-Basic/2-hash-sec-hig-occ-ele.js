// Find the second highest occurring element

function secondMostFreqEle(arr) {
  // initializing the size of the array
  let noOfEle = arr.length;

  //   variable initialized for the max and secMax freq count
  let maxFreq = 0;
  let secMaxFreq = 0;

  //   variable initialized for the max and secMax element of the freq count
  let maxEle = -1;
  let secMaxEle = -1;

  //   declared visited and initially set as false to all the element
  let visited = new Array(noOfEle).fill(false);

  //   outer loop
  for (let i = 0; i < noOfEle; i++) {
    // if any element matches go to the second loop
    if (visited[i]) continue;

    let freq = 0;

    // inner loop
    for (let j = i; j < noOfEle; j++) {
      if (arr[i] === arr[j]) {
        freq++;
        visited[j] = true;
      }
    }

    // conditions
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
