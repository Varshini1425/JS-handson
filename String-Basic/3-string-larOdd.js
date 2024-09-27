// find the largest odd number digits in the given string

function largestOdd(s) {
  // have taken the last index of the string
  for (let i = s.length - 1; i >= 0; i--) {
    // if the string contains the odd digit cut until that
    if (parseInt(s[i]) % 2 === 1) {
      // excluding the leading zeros
      let start = 0;

      while (start < i && s[start] === "0") {
        start++;
      }
      // printing the digits of largest odd numbers
      return s.slice(start, i + 1);
    }
  }
  return "";
}

// const str = "1356479";
const str = "002643854";
const result = largestOdd(str);
console.log(`Largest of odd number is ${result}`);
