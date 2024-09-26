// reverse the given strings

function reverseTheString(s) {
  let stack = [];

  for (let char of s) {
    stack.push(char);
  }
  for (let i = 0; i < s.length; i++) {
    s[i] = stack.pop();
  }
  return s;
}

const str = ["h", "e", "l", "l", "o"];
const reversedStr = reverseTheString(str);
console.log(reversedStr.join(" "));
