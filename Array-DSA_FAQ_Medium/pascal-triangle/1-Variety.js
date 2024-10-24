// Pascal's Triangle

// Given the row number r and the column number c, find out the element at position (r , c).

function pascalTriangle_nCr(n, r) {
  let res = 1;
  for (let i = 0; i < r; i++) {
    res = res * (n - i);
    res = Math.floor(res / (i + 1));
  }

  return res;
}

const row = 10,
  column = 3;
const result = pascalTriangle_nCr(row, column);
console.log(`The element at positon ${result}`);
