// check the given strings are anagram or not

function anagramOrNot(s, t) {
  let str1 = s.split("").sort().join("");
  let str2 = t.split("").sort().join("");

  if (str1 === str2) {
    return true;
  }

  return false;
}

let result = anagramOrNot("eat", "tea");
console.log(`The given strings are anagram: ${result}`);
