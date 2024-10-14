// Rotate matrix by 90 degrees
/* 
Given an N * N 2D integer matrix, rotate the matrix by 90 degrees clockwise.



The rotation must be done in place, meaning the input 2D matrix must be modified directly.
*/

function rotateMatrix90(matrix) {
  let n = matrix.length;

  // Transpose the matrix
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      // Swap elements across the diagonal
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  // Reverse each row of the matrix
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < Math.floor(n / 2); j++) {
      // Swap elements symmetrically
      [matrix[i][j], matrix[i][n - 1 - j]] = [
        matrix[i][n - 1 - j],
        matrix[i][j],
      ];
    }
  }
  return matrix;
}

const arrMatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const result = rotateMatrix90(arrMatrix);
console.log(`Rotate matrix by 90 degrees`);
