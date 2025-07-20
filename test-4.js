/*
1. Print a Pyramid Pattern with Spaces:
Input: 3
Output:
  *
 ***
*****
*/
let printPyramidPatter = (numOfRows) => {
  for (let i = 1; i <= numOfRows; i++) {
    let res = " ";

    for (let s = 1; s <= numOfRows - i; s++) {
      res += " ";
    }

    for (let star = 0; star < 2 * i - 1; star++) {
      res += "*";
    }
    console.log(res);
  }
};

printPyramidPatter(3);

/*
2. Print a Square with Border Only:
Input: 4
Output:
****
* *
* *
****
*/

/*
3. Count Binary Zeros and Ones:
Input: "101010110"
Output: { ones: 5, zeros: 4 }
*/

let countZerosAndOnes = (binaryStr) => {
  let strArr = binaryStr.split("");
  let result = strArr.reduce(
    (acc, curr) => {
      curr == "1" ? acc.ones++ : acc.zeros++;
      return acc;
    },
    { ones: 0, zeros: 0 }
  );
  return result;
};
console.log("Question-3 Sol:", countZerosAndOnes("101010110"));

/*
4. Group Users by Role (Objects inside Array):
Input: [
{ name: "A", role: "admin" },
{ name: "B", role: "user" },
{ name: "C", role: "admin" },
]
Output:
{
admin: ["A", "C"],
user: ["B"]
}
*/
let inputArr = [
  { name: "A", role: "admin" },
  { name: "B", role: "user" },
  { name: "C", role: "admin" },
];

let grpByRole = (inputArr) => {
  let object = {};

  for (let i = 0; i < inputArr.length; i++) {
    let obj = inputArr[i];

    if (!object[obj.role]) {
      object[obj.role] = [];
    }

    object[obj.role].push(obj.name);
  }

  return object;
};
console.log("Question-4 Sol: ", grpByRole(inputArr));

/*
5. Filter Only Unique Binary Strings from Array:
Input: ["101", "101", "000", "111", "000"]
Output: ["101", "000", "111"]
*/
let printUniArr = (arr) => {
  let uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }

  return uniqueArr;
};

console.log(
  "Question-5 Sol: ",
  printUniArr(["101", "101", "000", "111", "000"])
);

/*
6. Number Pyramid
Input: 5
Output:
    1
   121
  12321
 1234321
123454321
*/
let numberPyramid = (numOfRows) => {
  for (let i = 1; i <= numOfRows; i++) {
    let res = " ";

    for (let s = 1; s <= numOfRows - i; s++) {
      res += " ";
    }

    for (let j = 1; j <= i; j++) {
      res += j;
    }

    for (j = i - 1; j >= 1; j--) {
      res += j;
    }
    console.log(res);
  }
};

numberPyramid(5);

/*
7. Diamond Pattern
Input: 4
Output:
   *
  ***
 *****
*******
 *****
 ***
  *
*/

// let printDiamondPattern = (numOfRows) => {
//   // Upper half
//   for (let i = 1; i <= numOfRows; i++) {
//     let res = " ";

//     for (let s = 1; s <= numOfRows - i; s++) {
//       res += " ";
//     }

//     for (let j = 1; j <= i; j++) {
//       res += "*";
//     }

//     for (j = i - 1; j >= 1; j--) {
//       res += "*";
//     }

//     // Lower half
//     for (let j = numOfRows - 1; j >= numOfRows; j--) {
//       res += "*";
//     }

//     for (let i = numOfRows - 1; i >= 1; i--) {
//       let res = "";

//       for (let s = 1; s <= numOfRows - i; s++) {
//         res += " ";
//       }

//       for (let j = 1; j <= 2 * i - 1; j++) {
//         res += "*";
//       }

//       console.log(res);
//     }
//   }
// };

// printDiamondPattern(4);
