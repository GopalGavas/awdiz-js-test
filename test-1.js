// JavaScript DSA Questions (No Nested Loops)
/*
1. Count Even and Odd Numbers
Write a function that takes an array of numbers and returns how many are even and how many are odd.
Input 1: [2, 3, 4, 5]
Output 1: { even: 2, odd: 2 }
Input 2: [11, 14, 16, 17, 19]
Output 2: { even: 2, odd: 3 }
*/
let evenOdd = (numbers) => {
  let evenCount = 0;
  let oddCount = 0;

  for (let i = 0; i <= numbers.length - 1; i++) {
    if (numbers[i] % 2 == 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }

  return { evenCount, oddCount };
};

console.log(evenOdd([2, 3, 4, 5]));
console.log(evenOdd([11, 14, 16, 17, 19]));

/*
2. Grade Distribution
Given an array of marks, return how many students scored in grade ranges: A (90+), B (80-89), C (70-79),
D (60-69), F (<60).
Input 1: [95, 82, 67, 50]
Output 1: { A: 1, B: 1, C: 0, D: 1, F: 1 }
Input 2: [91, 59, 76, 88]
Output 2: { A: 1, B: 1, C: 1, D: 0, F: 1 }
*/

let gradeDistribution = (arrayOfMarks) => {
  let grades = { A: 0, B: 0, C: 0, D: 0, F: 0 };
  for (let i = 0; i < arrayOfMarks.length; i++) {
    if (arrayOfMarks[i] >= 90) {
      grades.A++;
    } else if (arrayOfMarks[i] >= 80) {
      grades.B++;
    } else if (arrayOfMarks[i] >= 70) {
      grades.C++;
    } else if (arrayOfMarks[i] >= 60) {
      grades.D++;
    } else if (arrayOfMarks[i] < 60) {
      grades.F++;
    }
  }
  return grades;
};

console.log(gradeDistribution([95, 82, 67, 50]));
console.log(gradeDistribution([91, 59, 76, 88]));

/*
3. All Positive Numbers?
Check if all elements in the array are greater than 0 using `every()`.
Input 1: [1, 2, 3, 4]
Output 1: true
Input 2: [-1, 0, 5]
Output 2: false
*/

let numbers = [-1, 0, 5];
let isGreaterZero = numbers.every((num) => {
  return num > 0;
});

console.log(isGreaterZero);

/*
4. Find First Number Greater Than 50
Return the first number in the array greater than 50 using find or loop.
Input 1: [10, 25, 60, 40]
Output 1: 60
Input 2: [45, 52, 19]
Output 2: 52
*/

let input = [45, 52, 19];
for (let i = 0; i < input.length; i++) {
  if (input[i] > 50) {
    console.log(input[i]);
    break;
  }
}

/*
5. Leap Year Checker
Check if a year is a leap year (divisible by 4 but not 100, unless divisible by 400).
Input 1: 2024
Output 1: true
Input 2: 2023
Output 2: false
*/

let checkLeapYear = (year) => {
  let isLeapYear;
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    isLeapYear = true;
  } else {
    isLeapYear = false;
  }

  return isLeapYear;
};
console.log(checkLeapYear(2024));
console.log(checkLeapYear(2023));

/*
6. Double the Elements
Using `map()`, return a new array where every number is multiplied by 2.
Input 1: [1, 2, 3]
Output 1: [2, 4, 6]
Input 2: [5, 10]
Output 2: [10, 20]
*/

let doubleElements = (numbers) => {
  return numbers.map((num) => num * 2);
};

console.log(doubleElements([1, 2, 3]));
console.log(doubleElements([5, 10]));

/*
7. Filter Out Even Numbers
Return a new array with only the odd numbers using `filter()`.
Input 1: [1, 2, 3, 4, 5]
Output 1: [1, 3, 5]
Input 2: [10, 15, 20, 25]
Output 2: [15, 25]
*/
let filterEven = (numbers) => {
  return numbers.filter((num) => num % 2 == 1);
};
console.log(filterEven([1, 2, 3, 4, 5]));
console.log(filterEven([10, 15, 20, 25]));

/*
8. Total Character Count in Strings
Return the total number of characters in an array of strings using `reduce()`.
Input 1: ['hi', 'world']
Output 1: 7
Input 2: ['a', 'ab', 'abc']
Output 2: 6
*/

let totalCount = (arrayOfStrings) => {
  return arrayOfStrings.reduce((acc, word) => {
    acc += word.length;
    return acc;
  }, 0);
};
console.log(totalCount(["hi", "world"]));
console.log(totalCount(["a", "ab", "abc"]));

/*
9. Get Last 3 Items
Return the last 3 items in the array using `slice()`.
Input 1: [1, 2, 3, 4, 5]
Output 1: [3, 4, 5]
Input 2: [10, 20, 30, 40]
Output 2: [20, 30, 40]
*/

console.log([1, 2, 3, 4, 5].slice(2));
console.log([10, 20, 30, 40].slice(1));

/*
10. Remove Element at Index 2
Use `splice()` to remove the element at index 2.
Input 1: [1, 2, 3, 4]
Output 1: [1, 2, 4]
Input 2: [10, 11, 12, 13]
Output 2: [10, 11, 13]
*/

let removeElement = (array) => {
  array.splice(2, 1);
  return array;
};
console.log(removeElement([1, 2, 3, 4]));
console.log(removeElement([10, 11, 12, 13]));

/*
11. Capitalize First Letter
Return a new array where each word starts with an uppercase letter.
Input 1: ['hello', 'world']
Output 1: ['Hello', 'World']
Input 2: ['code', 'test']
Output 2: ['Code', 'Test']
*/

let capitalize = (arrayOfStr) => {
  let capitalizedArr = [];
  for (let i = 0; i < arrayOfStr.length; i++) {
    let capitalize =
      arrayOfStr[i].charAt(0).toUpperCase() + arrayOfStr[i].slice(1);
    capitalizedArr.push(capitalize);
  }
  return capitalizedArr;
};
console.log(capitalize(["hello", "world"]));
console.log(capitalize(["code", "test"]));

/*
12. Check Divisibility by 5
Use `some()` to check if at least one number in the array is divisible by 5.
Input 1: [3, 6, 10, 14]
Output 1: true
Input 2: [2, 4, 6]
Output 2: false
*/

let divisibleByFive = (input) => {
  return input.some((num) => num % 5 == 0);
};
console.log(divisibleByFive([3, 6, 10, 14]));
console.log(divisibleByFive([2, 4, 6]));

/*
13. Find Index of First Negative
Return the index of the first negative number, or -1 if none found.
Input 1: [1, 2, -3, 4]
Output 1: 2
Input 2: [5, 7, 8]
Output 2: -1
*/

let firstNegativeNum = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      return i;
    }
  }

  return -1;
};
console.log(firstNegativeNum([1, 2, -3, 4]));
console.log(firstNegativeNum([5, 7, 8]));

/*
14. Count Word Frequencies
Return an object where the keys are words and values are how many times each appears.
Input 1: ['apple', 'banana', 'apple']
Output 1: { apple: 2, banana: 1 }
Input 2: ['x', 'x', 'y']
Output 2: { x: 2, y: 1 }
*/

let wordFrequency = (array) => {
  let frequency = {};

  for (let i = 0; i < array.length; i++) {
    let word = array[i];
    frequency[word] = (frequency[word] || 0) + 1;
  }

  return frequency;
};
console.log(wordFrequency(["apple", "banana", "apple"]));
console.log(wordFrequency(["x", "x", "y"]));

/*
15. Group Strings by Length
Create an object grouping strings based on their length.
Input 1: ['hi', 'yes', 'no', 'maybe']
Output 1: { 2: ['hi', 'no'], 3: ['yes'], 5: ['maybe'] }
Input 2: ['a', 'ab', 'abc']
Output 2: { 1: ['a'], 2: ['ab'], 3: ['abc'] }
*/

/*
16. Convert Array to Object by ID
Convert an array of objects to a single object where keys are IDs and values are names.
Input 1: [{id:1, name:'A'}, {id:2, name:'B'}]
Output 1: { 1: 'A', 2: 'B' }
Input 2: [{id:3, name:'X'}, {id:4, name:'Y'}]
Output 2: { 3: 'X', 4: 'Y' }
*/

/*
17. Count Data Types
Return a count of how many times each data type appears in an array.
Input 1: [1, 'hi', true, {}]
Output 1: { number: 1, string: 1, boolean: 1, object: 1 }
Input 2: ['x', 'y', 5]
Output 2: { string: 2, number: 1 }
*/

/*
18. Flatten One-Level Nested Array
Flatten a single-level nested array (no recursion).
Input 1: [1, [2, 3], 4]
Output 1: [1, 2, 3, 4]
Input 2: ['a', ['b', 'c']]
Output 2: ['a', 'b', 'c']
*/

let flattenArray = (array) => {
  return array.flat(1);
};
console.log(flattenArray([1, [2, 3], 4]));
console.log(flattenArray(["a", ["b", "c"]]));

/*
19. Remove Duplicate Numbers
Return a new array without duplicate numbers.
Input 1: [1, 2, 2, 3]
Output 1: [1, 2, 3]
Input 2: [4, 4, 4, 5]
Output 2: [4, 5]
*/

let removeDuplicates = (array) => {
  let unqiueArr = [];

  for (let i = 0; i < array.length; i++) {
    if (!unqiueArr.includes(array[i])) {
      unqiueArr.push(array[i]);
    }
  }

  return unqiueArr;
};

console.log(removeDuplicates([1, 2, 2, 3]));
console.log(removeDuplicates([4, 4, 4, 5]));

/*
20. Find Longest Word
Return the longest word from an array of strings.
Input 1: ['hi', 'hello', 'goodbye']
Output 1: 'goodbye'
Input 2: ['short', 'longer', 'lengthiest']
Output 2: 'lengthiest'
*/
let findLongest = (array) => {
  let longest = "";
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > longest.length) {
      longest = array[i];
    }
  }
  return longest;
};
console.log(findLongest(["hi", "hello", "goodbye"]));
console.log(findLongest(["short", "longer", "lengthiest"]));
