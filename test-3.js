/*
Q1 (Updated): Find the First Non-Repeating Element in an Array
Input: [4, 5, 1, 2, 0, 4, 1, 0]
Output: 5
🧠 Use an object to store frequency, then return the first element with frequency 1
*/
let nonRepeating = (array) => {
  let freq = {};

  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    freq[num] = (freq[num] || 0) + 1;
  }

  for (let i = 0; i < array.length; i++) {
    if (freq[array[i]] == 1) {
      return array[i];
    }
  }
};
console.log("Question-1 Sol:", nonRepeating([4, 5, 1, 2, 0, 4, 1, 0]));

/*
🔹 Q2. Check if Two Objects Have the Same Keys and Values
let obj1 = { a: 1, b: 2 };
let obj2 = { b: 2, a: 1 };
Output: true
🧠 Order doesn’t matter. Compare keys and values
*/
let isEqual = (obj1, obj2) => {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
};

console.log("Question-2 Sol: ", isEqual({ a: 1, b: 2 }, { b: 2, a: 1 }));

/*
Q3. Merge Two Arrays and Remove Duplicates
Input: [1, 2, 3], [2, 3, 4]
Output: [1, 2, 3, 4]
🧠 Use Set or object keys for uniqueness
*/
let mergeTwoArr = (arr1, arr2) => {
  let arr3 = [...arr1, ...arr2];
  return new Set(arr3);
};

console.log("Question-3 Sol:", mergeTwoArr([1, 2, 3], [2, 3, 4]));

/*
Q4 (Updated): Convert an Array of Objects into a Single Object
let arr = [
{ id: 1, name: "A" },
{ id: 2, name: "B" }
];
Output:
{
1: "A",
2: "B"
}
🧠 Use a loop or reduce() to convert array into object with id as key
*/
let convertToObj = (arr) => {
  let objects = {};
  for (let i = 0; i < arr.length; i++) {
    let obj = arr[i];
    objects[obj.id] = obj.name;
  }

  return objects;
};

console.log(
  "Question-4 Sol: ",
  convertToObj([
    { id: 1, name: "A" },
    { id: 2, name: "B" },
  ])
);

/*
Q5. Find a Pair With Given Sum (Using Object Map)
Input: [1, 2, 4, 7], Target = 6
Output: true (Because 2 + 4 = 6)
🧠 Use object for complement lookup
*/

/*
🔹 Q6. Find Missing Number in Sorted Array (Binary Search)
Input: [1, 2, 3, 5, 6]
Output: 4
🧠 Use binary approach to find the missing number
*/

let missingNum = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] !== arr[i] + 1) {
      return arr[i] + 1;
    } else {
      continue;
    }
  }
};
console.log("Question-6 Sol: ", missingNum([1, 2, 3, 5, 6]));

/*
Q7. Convert Object to Array of Key-Value Pairs
let obj = { a: 1, b: 2 }
Output: [["a", 1], ["b", 2]]
🧠 Use Object.entries()
*/

let convertToArr = (obj) => {
  let arr = [];

  for (const [key, value] of Object.entries(obj)) {
    arr.push([key, value]);
  }

  return arr;
};

console.log("Question-7 Sol:", convertToArr({ a: 1, b: 2 }));
/*
Q9. Binary Search in Sorted Array
Input: [1, 3, 5, 7, 9], Target = 5
Output: 2 (Index of 5)
🧠 Implement binary search manually
*/
let binarySearch = (array, target) => {
  let start = 0;
  let end = array.length - 1;

  let midIndex = Math.round((start + end) / 2);

  for (let i = 0; i < array.length; i++) {
    if (target == array[midIndex]) {
      return midIndex;
    } else if (target > array[midIndex]) {
      start = midIndex++;
    } else {
      end = midIndex--;
    }
  }
};

console.log("Question-9 Sol:", binarySearch([1, 3, 5, 7, 9], 5));

/*
🔹 Q10. Group Elements by Frequency
Input: [1, 1, 2, 3, 3, 3]
Output:
{
"1": 2,
"2": 1,
"3": 3
}
*/

let grpByFreq = (array) => {
  let obj = {};

  for (let i = 0; i < array.length; i++) {
    let num = array[i];

    obj[num] = (obj[num] || 0) + 1;
  }

  return obj;
};

console.log("Question-10 Sol:", grpByFreq([1, 1, 2, 3, 3, 3]));
