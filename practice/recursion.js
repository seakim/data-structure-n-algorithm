
/**
 * isPowerOfThree
 * addDigits
 * isPalindrome
 * flatten
 */


/**
 * Given an integer, write a function to determine if it is a power of three.
 */
function isPowerOfThree(x) {
  // powerOfThree(9)/3 === powerOfThree(3)
  // powerOfThree(3)/3 === powerOfThree(1) === 1
  if (x === 1) return true;
  else if (x < 1 || x === 2) return false;
  return isPowerOfThree(x/3);
}
// console.log(powerOfThree(27),powerOfThree(9),powerOfThree(45),powerOfThree(0));


/**
 * Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.
 */
function addDigits(x) {
  // get all digits
  // add them
  // if digit is more than one, repeat the steps
  // 1. get digit size
  let size = Math.floor(Math.log10(x)) + 1;
  if (x < 10) return x;
  // 2. get all digits
  // x1 = 1's digit ===   Math.floor(x/10**0) % 10
  // x2 = 10's digit ===  Math.floor(x/10**1) % 10
  // x3 = 100's digit === Math.floor(x/10**2) % 10
  // sum = x1 + x2 + x3 + ...
  var sum = 0;
  for (let i = 0; i < size; i++) {
    sum += Math.floor(x/10**i) % 10;
  }
  return addDigits(sum);
}
// console.log(addDigits(38));


/**
 * Palindrome check recursively
 */
function isPalindrome(str) {
  // change str to arr
  // if arr.length < 2, return true
  // else compare arr[0] and arr[arr.length-1], and pop and shift if they are the same
  if (str.length < 2) return true;
  let first = str[0];
  let last = str[str.length-1];
  if (first !== last) return false;
  
  str = str.slice(1,str.length-1);
  return isPalindrome(str);
}
// console.log(isPalindrome("DCABAC"),isPalindrome("DCABACD"));


/** 
 * recursively call flatten to make array flatten
 */
function flatten(arr) {
  // set newArray
  // loop through arr, and check if there is inner array
  // if no inner arrary, return arr
  // else,
  // newArray.concat(flatten(arr[i]))
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(flatten(arr[i]))
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
// console.log(flatten([[1],[2],[3]]), flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));


