// check the given strings are isomorphoc or not

function isomorphocOrNot(s, t) {
  let string_1 = Array(256).fill(0);
  let string_2 = Array(256).fill(0);

  let n = s.length;

  for (let i = 0; i < n; i++) {
    /*because array indexies starts from 0th index 
        so both strings haven't checked before update the last seen positions 
        if not return false
         */
    if (string_1[s.charCodeAt(i)] !== string_2[t.charCodeAt(i)]) {
      return false;
    }

    string_1[s.charCodeAt(i)] = i + 1;
    string_2[t.charCodeAt(i)] = i + 1;
  }

  return true;
}

// const firstString = "egg";
// const secondString = "add";

const firstString = "milk";
const secondString = "coffee";

let result = isomorphocOrNot(firstString, secondString);

console.log(`The given strings are isomorphic: ${result}`);
