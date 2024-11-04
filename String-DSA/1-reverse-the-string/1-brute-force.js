// Reverse every word in a string

/*
Given an input string, containing upper-case and lower-case letters, digits, and spaces( ' ' ). A word is defined as a sequence of non-space characters. The words in s are separated by at least one space.



Return a string with the words in reverse order, concatenated by a single space.

*/

function reverseWords(s) {
  let n = s.length; // Length of string

  // List to store the words present in string
  let words = [];

  // Pointers to mark the start and end of a word
  let start, end;

  let i = 0;
  while (i < n) {
    // Finding the first character of a word (if any)
    while (i < n && s[i] === " ") i++;

    // If no word is found, break
    if (i >= n) break;

    start = i; // Storing the index of first character of word

    // Finding the last character of the word
    while (i < n && s[i] !== " ") i++;

    end = i - 1; // Storing the index of last character of word

    // Add the found word to the list of words
    let wordFound = s.slice(start, end + 1);
    words.push(wordFound);
  }

  let ans = "";

  // Adding all the words to result in the reverse order
  for (let i = words.length - 1; i >= 0; i--) {
    ans += words[i];

    // Adding spaces in between words
    if (i !== 0) ans += " ";
  }

  return ans; // Return the stored result
}

let s = "welcome     to the jungle   ";
const res = reverseWords(s);
console.log(`The reverses words are converted (from) ${s} (to) --- ${res}`);
