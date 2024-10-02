// Rotate string

function rotateString(str, goal) {
  if (str.length !== goal.length) {
    return false;
  }

  for (let i = 0; i < str.length; i++) {
    let rotated = str.substring(i) + str.substring(0, i);
    if (rotated === goal) {
      return true;
    }
  }

  return false;
}

let result = rotateString("abc", "cab");
console.log(`The string after rotating it becomes: ${result}`);
