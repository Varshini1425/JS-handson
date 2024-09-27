// find the longest common prefix of the given array of strings
function LongestCommonPrefix(strs) {
  if (strs.length === 0) {
    return "";
  }

  strs.sort();

  const firstIndex = strs[0];
  const lastIndex = strs[strs.length - 1];

  let commonPrefix = "";

  for (let i = 0; i < Math.min(firstIndex.length, lastIndex.length); i++) {
    if (firstIndex[i] !== lastIndex[i]) {
      return commonPrefix;
    }
    commonPrefix = commonPrefix + firstIndex[i];
  }
  return commonPrefix;
}

const arrOfStr = ["flowers", "flow", "fly", "flight"];

const result = LongestCommonPrefix(arrOfStr);

console.log(`The longest commom prefix: ${result}`);
