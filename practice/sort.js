
/**
 * Swap
 * Bubble Sort
 * Selection Sort
 * Insertion Sort
 * Merge Sort
 * Radix Sort
 */

/** 
 * Swap arr[i] and arr[j]
 */
function swap(arr, i, j) {
  // return arr
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
}
// console.log(swap([54,46,65,12,6,76,3], 1, 2));

/** 
 * Bubble Sort 
 * O(N^2)
 * Compare arr[i] and arr[j] and bubble up until arr[i] > arr[j]
 */
function bubbleSort(arr) {
  // i goes from 0 to arr.length - 2 and j goes from i+1 to arr.length - 1
  // if arr[i] > arr[j], swap them
  // return arr
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i+1; j < arr.length; j++) {
      if (arr[i] > arr[j]) swap(arr, i, j);
    }
  }
  return arr;
}
// console.log(bubbleSort([54,46,65,12,6,76,3]));


/**
 * Selection Sort
 * O(N^2)
 * find the smallest value and swap with arr[i]
 */
function selectionSort(arr) {
  // set min = arr[i]
  // i goes from 0 to arr.length - 2 and j goes from i+1 to arr.length - 1
  // set min = j if arr[j] < arr[min]
  // swap i and min
  // return arr
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i+1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    swap(arr, i, min);
  }
  return arr;
}
// console.log(selectionSort([54,46,65,12,6,76,3]));

/** 
 * Insertion Sort
 * O(N^2)
 * Compare and swap arr[j+1] with arr[j] until j >= 0
 */
function insertionSort(arr) {
  // set current = arr[i]
  // compare and swap arr[j+1] and arr[j] where j = i - 1, i - 2, ... 
  // condition for swap is j >= 0 and arr[j] < current
  // i goes from 1 to arr.length - 1, and j goes from i-1 to 0
  // return arr
  for (var i = 1; i < arr.length; i++) {
    let current = arr[i];
    for (var j = i-1; j >= 0 && current < arr[j]; j--) {
      arr[j+1] = arr[j];
    }
    arr[j+1] = current;
  }
  return arr;
}
// console.log(insertionSort([54,46,65,12,6,76,3]));


/**
 * Merge Sort
 * O(N*log(N))
 * Setup a merge function with 3 while loop to merge two arrays
 * Setup a mergeSort function to split all items and merge back with merge function
 */

function merge(arr1,arr2) {
  // compare two sorted array arr1[i] and arr2[j]
  // push the smaller value to the result using 3 while loops
  // after all items from one array are pushed, push the remaining to the result
  let result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}
// console.log(merge([1,3,5],[2,4,6,8]));

function mergeSort(arr) {
  // set a basecase to return arr when arr.length < 2
  // recursively split arr until the sub array until it's length < 2 and assign them to left and right
  // return merge left and right
  if (arr.length < 2) return arr;
  let mid = Math.floor(arr.length/2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right)
}
// console.log(mergeSort([54,46,65,12,6,76,3]));


/**
 * Radix Sort
 * O(N*M)
 * Get digits and most digit counts
 */

function getDigit(n,i) {
  // get the digit of number;
  // e.g> getDigit(345,2) is 4
  let digit = Math.floor(n * 10 / (10 ** (i+1) ) ) % 10;
  return digit;
}
// console.log(getDigit(345232,0));

function digitCount(n) {
  // get a digitCount using floor, log10, and abs
  let count = Math.floor( Math.log10( Math.abs(n) ) ) + 1;
  if (n === 0) return 1;
  return count;
}
// console.log(digitCount(3040));

function mostDigits(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (max < digitCount(arr[i])) max = digitCount(arr[i]);
  }
  return max;
}
// console.log(mostDigits([54,46,65,12,6,736,3]));

function radixSort(arr) {
  // set bucket as an array with length of 10;
  // push item base on 
  let m = mostDigits(arr);
  for (let k = 0; k < m; k++) {
    let bucket = Array.from( {length:10}, () => [] );
    for (let i = 0; i < arr.length; i++) {
      let place = getDigit(arr[i], k);
      bucket[place].push(arr[i]);
    }
    arr = [].concat(...bucket);
  }
  return arr;
}
// console.log(radixSort([54,46,365,12,332316,76,3]));
