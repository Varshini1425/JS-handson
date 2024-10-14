// Rotate matrix by 90 degrees
/* 
Given an N * N 2D integer matrix, rotate the matrix by 90 degrees clockwise.



The rotation must be done in place, meaning the input 2D matrix must be modified directly.
*/

function rotateMatrix90(matrix) {
  let n = matrix.length;

  // Initialize new matrix to store rotated values
  let rotated = new Array(n).fill().map(() => new Array(n).fill(0));

  // Perform rotation logic
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      rotated[j][n - i - 1] = matrix[i][j];
    }
  }

  // Copy rotated elements back to original matrix
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      matrix[i][j] = rotated[i][j];
    }
  }
}

const arrMatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const result = rotateMatrix90(arrMatrix);
console.log(`Rotate matrix by 90 degrees`);
