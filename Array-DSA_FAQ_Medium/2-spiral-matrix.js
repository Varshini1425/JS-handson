// Print the matrix in spiral manner

/* 
Given an M * N matrix, 
print the elements in a clockwise spiral manner. 
Return an array with the elements in the order of their appearance when printed in a spiral manner.
*/

function spiralMatrix(matrix) {
  let ans = [];
  let n = matrix.length;
  let m = matrix[0].length;

  let top = 0,
    left = 0;
  let right = m - 1;
  let bottom = n - 1;

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; ++i) {
      ans.push(matrix[top][i]);
    }
    top++;

    for (let i = top; i <= bottom; ++i) {
      ans.push(matrix[i][right]);
    }
    right--;

    if (top <= bottom) {
      for (let i = right; i >= left; --i) {
        ans.push(matrix[bottom][i]);
      }
      bottom--;
    }

    if (left <= right) {
      for (let i = bottom; i >= top; --i) {
        ans.push(matrix[i][left]);
      }
      left++;
    }
  }

  return ans;
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const result = spiralMatrix(matrix);

console.log(`Spiral matrix: ${result}`);
