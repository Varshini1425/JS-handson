// find the largest odd number in the given string

function largestOdd(s) {
  for (let i = s.length; i >= 0; i--) {
    if (parseInt(s[i]) % 2 === 1) {
      return s.slice(0, i + 1);
    }
  }
  return "";
}

const str = "1356479";

const result = largestOdd(str);
console.log(`Largest of odd number is ${result}`);
