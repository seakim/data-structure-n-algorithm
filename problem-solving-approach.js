/**
 * Frequency Counter
 * Anagrams
 * Multiple Pointers
 * Count Unique Values
 * Sliding Window
 * Divide and Conquer
 */


/**
 * FREQUENCY COUNTERS
 * 
 * Write a function called same, which accepts two arrays. The function should return true if 
 * every value in the array has it's corresponding value squared in the second array. 
 * The frequency of values must be the same.
 */

// O(N)
function same(arr1, arr2) {
  // 1. compare arr1.length and arr2.length
  // 2. make an object, obj1, with arr1 value as key
  // 3. make an object, obj2, with arr2 value as key
  // 4. compare obj1 and obj2

  // 1
  if (arr1.length !== arr2.length) return false;
  let obj1 = {}
    , obj2 = {};
  // 2
  for (let val of arr1) {
    obj1[val] ? obj1[val]++ : obj1[val] = 1;
  }
  // 3
  for (let val of arr2) {
    obj2[val] ? obj2[val]++ : obj2[val] = 1;
  }
  // 4
  for (key in obj1) {
    if (obj1[key] !== obj2[key**2]) return false;
  }
  return true;
}
// console.log(same([1,2,3], [4,1,9])); // true
// console.log(same([1,2,3], [1,9])); // false
// console.log(same([1,2,1], [4,4,1])); // false (must be same frequency)


/**
 * ANAGRAMS
 * 
 * Given two strings, write a function to determine if the second string is an anagram of the first. 
 * An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, 
 * formed from iceman.
 */

// O(N)
function validAnagram(str1,str2) {
  // same as above: FREQUENCY COUNTERS
  if (str1.length !== str2.length) return false;
  let obj1 = {}
    , obj2 = {};
  for (let val of str1) {
    obj1[val] ? obj1[val]++ : obj1[val] = 1;
  }
  for (let val of str2) {
    obj2[val] ? obj2[val]++ : obj2[val] = 1;
  }
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
}
// console.log(validAnagram('', '')); // true
// console.log(validAnagram('aaz', 'zza')); // false
// console.log(validAnagram('anagram', 'nagaram')); // true
// console.log(validAnagram("rat","car")); // false) 
// console.log(validAnagram('awesome', 'awesom')); // false
// console.log(validAnagram('qwerty', 'qeywrt')); // true
// console.log(validAnagram('texttwisttime', 'timetwisttext')); // true


/**
 * MULTIPLE POINTERS
 * 
 * Write a function called sumZero which accepts a sorted array of integers. The function should find 
 * the first pair where the sum is 0. Return an array that includes both values that sum to zero or 
 * undefined if a pair does not exist
 */

// O(N)
function sumZero(arr) {
  // 1. array is sorted
  // 2. set left at index 0
  // 3. set right at index arr.length - 1
  // 4. add left and right
  // 5. if the sum > 0, right - 1
  // 6. if the sum < 0, left - 1
  // 7. stop if the left === right and return undefined

  // 1,2,3
  let left = 0
    , right = arr.length - 1;

  // 7
  while (left < right) {
    // 4,5,6
    let sum = arr[left] + arr[right];
    if (sum === 0) return [ arr[left], arr[right] ];
    else if (sum > 0) right--;
    else if (sum < 0) left++;
  }
}
// console.log(sumZero([-3,-2,-1,0,1,2,3])); // [-3,3] 
// console.log(sumZero([-2,0,1,3])); // undefined
// console.log(sumZero([1,2,3])); // undefined


/**
 * COUNT UNIQUE VALUES
 * 
 * Implement a function called countUniqueValues, which accepts a sorted array, 
 * and counts the unique values in the array. There can be negative numbers in the array, 
 * but it will always be sorted.
 */

// O(N)
function countUniqueValues(arr) {
  // 1. set an object, obj, with the values of arr
  // 2. count the keys

  // 1
  let obj = {};
  for (val of arr) {
    obj[val] ? obj[val]++ : obj[val] = 1;
  }
  // 2
  let count = 0;
  for (key in obj) {
    count ++;
  }
  return count;
}
// console.log(countUniqueValues([1,1,1,1,1,2])); // 2
// console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])); // 7
// console.log(countUniqueValues([])); // 0
// console.log(countUniqueValues([-2,-1,-1,0,1])); // 4


/**
 * SLIDING WINDOW
 * 
 * Write a function called maxSubarraySum which accepts an array of integers and a number called n. 
 * The function should calculate the maximum sum of n consecutive elements in the array.
 */

// O(N^2)
function maxSubarraySumN2(arr, n) {
  // 0. find max sum of n consec. nums
  // 1. using nested structure where i goes from 0 to arr.length-n+1
  // 2. and j goes i to i+n
  // 3. find sum of js
  // 4. compare sum with max

  let max = null;
  for (let i = 0; i < arr.length-n+1; i++) {
    let sum = 0;
    for (let j = i; j < i+n; j++) {
      sum += arr[j];
    }
    if (sum > max) max = sum;
  }
  return max;
}

// O(N)
function maxSubarraySum(arr, n) {
  // 0. find max sum of n consec. nums
  // 1. set sum to the first n consec. numbers
  // 2. set max = sum
  // 3. subtract arr[i-n], and add arr[i]
  // 4. compare with max
  // 5. do it until i goes arr.length

  if (arr.length < n) return null;
  let sum = null
    , max = null;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
  }
  max = sum;
  for (let i = n; i < arr.length; i++) {
    sum = sum - arr[i-n] + arr[i];
    max = Math.max(sum, max)
  }
  return max;
}
// console.log(maxSubarraySum([1,2,5,2,8,1,5],2)); // 10
// console.log(maxSubarraySum([1,2,5,2,8,1,5],4)); // 17
// console.log(maxSubarraySum([4,2,1,6],1)); // 6
// console.log(maxSubarraySum([4,2,1,6,2],4)); // 13
// console.log(maxSubarraySum([],4)); // null


/**
 * DIVIDE AND CONQUER
 * 
 * Given a sorted array of integers, write a function called search, that accepts a value and returns 
 * the index where the value passed to the function is located. If the value is not found, return -1
 */

function search(arr, x) {
  // 0. array is sorted, return the index || -1
  // 1. set left = 0 (index)
  // 2. set right = arr.length - 1 (index)
  // 3. set mid = Math.floor((left+right)/2)
  // 4. compare mid and x 
  // 5. if x > arr[mid], set left = mid + 1
  // 6. if x < arr[mid], set right = mid - 1
  // 7. if x === arr[mid], return mid
  // 8. set mid again 
  // 9. do while left <= right, and return -1 if not found

  let left = 0
    , right = arr.length-1;
  while (left <= right) {
    let mid = Math.floor((left+right)/2);
    if (arr[mid] < x) left = mid + 1;
    else if (arr[mid] > x) right = mid - 1;
    else return mid;
  }
  return -1;
}
// console.log(search([1,2,3,4,5,6],4)); // 3
// console.log(search([1,2,3,4,5,6],6)); // 5
// console.log(search([1,2,3,4,5,6],11)); // -1