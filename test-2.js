/*
1. Reverse an array
Reverse the elements of an array manually (without using .reverse()).
Input 1: [1, 2, 3]
Output 1: [3, 2, 1]
Input 2: [10, 20, 30]
Output 2: [30, 20, 10]
*/
let reverseArray = (array) => {
  let start = 0;
  let end = array.length - 1;
  while (start < end) {
    let temp = array[start];
    array[start] = array[end];
    array[end] = temp;

    start++;
    end--;
  }

  return array;
};
console.log(reverseArray([1, 2, 3]));
console.log(reverseArray([10, 20, 30]));

/*
2. Find second largest number in an array
Return the second largest unique number from an array.
Input 1: [10, 5, 20, 8]
Output 1: 10
Input 2: [1, 2, 2, 3]
Output 2: 2
*/

let secondLargest = (array) => {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      secondLargest = largest;
      largest = array[i];
    } else if (array[i] > secondLargest && array[i] < largest) {
      secondLargest = array[i];
    }
  }

  return secondLargest;
};

console.log(secondLargest([10, 5, 20, 8]));
console.log(secondLargest([1, 2, 2, 3]));

/*
3. Remove duplicates from array
Return a new array with all duplicates removed (no Set).
Input 1: [1, 2, 2, 3]
Output 1: [1, 2, 3]
Input 2: [5, 5, 5, 1]
Output 2: [5, 1]
*/
let removeDuplicates = (array) => {
  let uniqueArr = [];
  for (let i = 0; i < array.length; i++) {
    if (!uniqueArr.includes(array[i])) {
      uniqueArr.push(array[i]);
    }
  }

  return uniqueArr;
};

console.log(removeDuplicates([1, 2, 2, 3]));
console.log(removeDuplicates([5, 5, 5, 1]));

/*
4. Check if two arrays are equal
Compare if two arrays have same elements in same order.
Input 1: [1, 2, 3], [1, 2, 3]
Output 1: true
Input 2: [1, 2], [2, 1]
Output 2: false
*/

let areArraysEqual = (array1, array2) => {
  let isEqual;
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] == array2[j]) {
        isEqual = true;
      } else {
        isEqual = false;
      }
    }
  }

  return isEqual;
};
console.log(areArraysEqual([1, 2, 3], [1, 2, 3]));
console.log(areArraysEqual([1, 2], [2, 1]));

/*
5. Rotate array k times to the right
Rotate array elements k times to the right.
Input 1: [1, 2, 3, 4], k = 2
Output 1: [3, 4, 1, 2]
Input 2: [10, 20, 30], k = 1
Output 2: [30, 10, 20]
*/
let rotateArray = (array, k) => {
  for (let i = 0; i < k; i++) {
    let lastElement = array.pop();
    array.unshift(lastElement);
  }
  return array;
};
console.log(rotateArray([1, 2, 3, 4], 2));
console.log(rotateArray([10, 20, 30], 1));

/*
6. Count vowels in a string
Count number of vowels (a, e, i, o, u) in a given string.
Input 1: "hello"
Output 1: 2
Input 2: "JAVASCRIPT"
Output 2: 3
*/
let countVowels = (string) => {
  let vowelCount = 0;
  let lowerCased = string.toLowerCase();
  for (let i = 0; i < lowerCased.length; i++) {
    if (
      lowerCased[i] == "a" ||
      lowerCased[i] == "e" ||
      lowerCased[i] == "i" ||
      lowerCased[i] == "o" ||
      lowerCased[i] == "u"
    ) {
      vowelCount++;
    }
  }
  return vowelCount;
};

console.log(countVowels("hello"));
console.log(countVowels("JAVASCRIPT"));

/*
7. Print triangle pattern using loops
Write a loop to print * pattern based on number of rows.
Input 1: 3
Output 1: *\n* *\n* * *
Input 2: 2
Output 2: *\n* *
*/

let printPattern = (rows) => {
  for (let i = 1; i <= rows; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += "*";
    }

    console.log(line.trim());
  }
};

printPattern(3);
printPattern(2);

/*
8. Factorial using recursion
Calculate factorial of a number using recursion.
Input 1: 5
Output 1: 120
Input 2: 3
Output 2: 6
*/
let printFactorial = (n) => {
  if (n == 1) {
    return 1;
  }
  return n * printFactorial(n - 1);
};
console.log(printFactorial(5));
console.log(printFactorial(3));

/*
9. Check if number is prime
Return true if number is prime (only divisible by 1 and itself).
Input 1: 7
Output 1: true
Input 2: 9
Output 2: false
*/
let primeNum = (num) => {
  let isPrime = true;

  if (num <= 1) {
    isPrime = false;
  } else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0) {
        isPrime = false;
        break;
      }
    }
  }
  return isPrime;
};
console.log(primeNum(7));
console.log(primeNum(9));

/*
10. Find Fibonacci number at Nth position
Return the Nth Fibonacci number (0-indexed).
Input 1: 5
Output 1: 5
Input 2: 6
Output 2: 8
*/
let fibo = (n) => {
  let first = 0;
  let second = 1;
  let third;

  for (let i = 2; i <= n; i++) {
    third = first + second;
    first = second;
    second = third;
  }

  return third;
};

console.log(fibo(5));
console.log(fibo(6));

/*
11. Count frequency of array elements
Return an object with count of each element in array.
Input 1: [1, 2, 2, 3]
Output 1: {1:1, 2:2, 3:1}
Input 2: [4, 4, 4]
Output 2: {4:3}
*/

let countFrequency = (array) => {
  let frequency = {};
  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    frequency[num] = (frequency[num] || 0) + 1;
  }

  return frequency;
};
console.log(countFrequency([1, 2, 2, 3]));
console.log(countFrequency([4, 4, 4]));

/*
12. Invert object (key value)
Swap keys and values in an object.
Input 1: {a:1, b:2}
Output 1: {1:'a', 2:'b'}
Input 2: {x:'y', z:'w'}
Output 2: {'y':'x', 'w':'z'}
*/
let swapKeyAndValue = (obj) => {
  let swapped = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      let value = obj[key];
      swapped[value] = key;
    }
  }

  return swapped;
};

console.log(swapKeyAndValue({ a: 1, b: 2 }));
console.log(swapKeyAndValue({ x: "y", z: "w" }));
/*
13. Merge two objects
Combine two objects into one.
Input 1: {a:1}, {b:2}
Output 1: {a:1, b:2}
Input 2: {x:10}, {x:20, y:30}
Output 2: {x:20, y:30}
*/

let mergeTwoObjects = (obj1, obj2) => {
  let mergedObject = { ...obj1, ...obj2 };
  return mergedObject;
};

console.log("MERGED OBJECTS: ", mergeTwoObjects({ a: 1 }, { b: 2 }));
console.log("MERGED OBJECTS: ", mergeTwoObjects({ x: 10 }, { x: 20, y: 30 }));

/*
14. Find key with highest value in object
Return the key which has the highest numeric value.
Input 1: {a: 1, b: 5, c: 3}
Output 1: "b"
Input 2: {x: 100, y: 99}
Output 2: "x"
*/

let findKey = (obj) => {
  let highestKey;
  let highestValue = 0;

  for (key in obj) {
    if (obj[key] > highestValue) {
      highestValue = obj[key];
      highestKey = key;
    }
  }

  return highestKey;
};

let highestKey = findKey({ a: 1, b: 5, c: 3 });
let highestKey2 = findKey({ x: 100, y: 99 });
console.log("HighestKey: ", highestKey);
console.log("HighestKey: ", highestKey2);

/*
15. Deep clone an object
Create a deep copy of an object manually (no JSON.parse).
Input 1: {a: 1, b: {c: 2}}
Output 1: {a: 1, b: {c: 2}}
Input 2: {x: [1, 2], y: {z: 3}}
Output 2: {x: [1, 2], y: {z: 3}}
*/

let input1 = { a: 1, b: { c: 2 } };
let input2 = { x: [1, 2], y: { z: 3 } };

let deepClone = (obj) => {
  if (typeof obj !== "object" || obj === null) return obj;

  if (Array.isArray(obj)) {
    let copyArr = [];
    for (let i = 0; i < obj.length; i++) {
      copyArr[i] = deepClone(obj[i]);
    }

    return copyArr;
  }

  let copyObj = {};
  for (let key in obj) {
    // (hasOwnProperty) avoids copying inherited properties that don't actually belong to the object itself.
    if (obj.hasOwnProperty(key)) {
      copyObj[key] = deepClone(obj[key]);
    }
  }
  return copyObj;
};

let copyInput1 = deepClone(input1);
console.log(copyInput1);
let copyInput2 = deepClone(input2);
console.log(copyInput2);

/*
16. Check if string is palindrome
Return true if string reads same forward and backward.
Input 1: "madam"
Output 1: true
Input 2: "hello"
Output 2: false
*/
let palindrome = (string) => {
  let start = 0;
  let end = string.length - 1;
  let isPalindrome = true;
  while (start < end) {
    if (string[start] != string[end]) {
      isPalindrome = false;
      break;
    }
    start++;
    end--;
  }
  return isPalindrome;
};

console.log(palindrome("madam"));
console.log(palindrome("hello"));

/*
17. First non-repeating character
Return the first character that does not repeat.
Input 1: "aabbcdd"
Output 1: "c"
Input 2: "xxyz"
Output 2: "y"
*/

let isRepeated = (string) => {
  let frequency = {};

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    frequency[char] = (frequency[char] || 0) + 1;
  }

  for (let i = 0; i < string.length; i++) {
    if (frequency[string[i]] === 1) {
      return string[i];
    }
  }

  return null;
};

console.log(isRepeated("aabbcdd"));
console.log(isRepeated("xxyz"));

/*
18. Reverse a string manually
Reverse a string without using .reverse().
Input 1: "hello"
Output 1: "olleh"
Input 2: "JS"
Output 2: "SJ"
*/
let reverseString = (string) => {
  let revString = "";
  for (let i = 0; i < string.length; i++) {
    revString = revString + string[string.length - 1 - i];
  }
  return revString;
};
console.log("Reverse String: ", reverseString("hello"));

/*
19. Flatten nested array
Convert a nested array into a single flat array.
Input 1: [1, [2, [3]], 4]
Output 1: [1, 2, 3, 4]
Input 2: [[1], [2, 3]]
Output 2: [1, 2, 3]
*/
let flattenArray = (array) => {
  let flatenArray = array.flat(Infinity);
  return flatenArray;
};
console.log(flattenArray([1, [2, [3]], 4]));
console.log(flattenArray([[1], [2, 3]]));

/*
20. Group array of objects by a property
Group objects into an object by their type.
Input 1: [{type:'fruit',name:'apple'},{type:'fruit',name:'banana'}]
Output 1: {fruit: ['apple', 'banana']}
Input 2: [{type:'a',name:'x'},{type:'b',name:'z'}]
Output 2: {a:['x'], b:['z']}
*/

let groupObj = (arrayOfObj) => {
  let combinedObj = {};
  for (let i = 0; i < arrayOfObj.length; i++) {
    let obj = arrayOfObj[i];

    if (!combinedObj[obj.type]) {
      combinedObj[obj.type] = [];
    }

    combinedObj[obj.type].push(obj.name);
  }

  return combinedObj;
};

console.log(
  groupObj([
    { type: "fruit", name: "apple" },
    { type: "fruit", name: "banana" },
  ])
);

console.log(
  groupObj([
    { type: "a", name: "x" },
    { type: "b", name: "z" },
  ])
);
