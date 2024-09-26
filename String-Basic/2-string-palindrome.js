// check if the given string is palindrome or not

function isPalindromeOrNot(s) {
  let right = s.length - 1;
  let left = 0;

  // Iterate while  start pointer is less than  end pointer
  while (left < right) {
    // If characters don't match, it's not a palindrome
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

// const str = "hello";
const str = "madam";

function main() {
  if (isPalindromeOrNot(str)) {
    console.log(`The given string is: ${str} is Palindrome`);
  } else {
    console.log(`The given string is: ${str} is not a Palindrome`);
  }
}
main();
