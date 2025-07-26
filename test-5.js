/*
1. Transpose of a Matrix
Description: Convert rows to columns and vice versa.
Input:
[
[1, 2],
[3, 4],
[5, 6]
]
Output:
[
[1, 3, 5],
[2, 4, 6]
]
*/

let transposeOfMatrix = (matrix) => {
  let transpose = [];

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (!transpose[col]) {
        transpose[col] = [];
      }

      transpose[col][row] = matrix[row][col];
    }
  }

  return transpose;
};

console.log(
  transposeOfMatrix([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);

/*
2. Diagonal Sum of Square Matrix
Description: Find the sum of both main diagonals.
Input:
[
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]
]
Output: 25 (1+5+9 + 3+5+7 – 5 (counted twice))
*/

/*
4. Search in 2D Matrix
Description: Return true if a given element exists.
Input: matrix + target = 5
[
[1, 2, 3],
[4, 5, 6]
]
*/

let searchInMatrix = (matrix, target) => {
  let targetFound = false;

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] == target) {
        targetFound = true;
      }
    }
  }

  return targetFound;
};

console.log(
  searchInMatrix(
    [
      [1, 2, 3],
      [4, 5, 6],
    ],
    5
  )
);

/*
6. Count Zeros and Ones in a Matrix
Description: Count the number of 0s and 1s in a 2D matrix.
Input:
[
[1, 0, 1],
[1, 1, 0],
[0, 0, 1]
]

Output:
{ zero: 4, one: 5 }
*/
let countZerosAndOnes = (matrix) => {
  let obj = { zero: 0, one: 0 };

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] == 0) {
        obj.zero++;
      } else if (matrix[i][j] == 1) {
        obj.one++;
      }
    }
  }

  return obj;
};

console.log(
  countZerosAndOnes([
    [1, 0, 1],
    [1, 1, 0],
    [0, 0, 1],
  ])
);

/*
8. Count Elements Greater than a Threshold
Description: Count how many elements are greater than a given number k.
Input: matrix + k = 5

[
[2, 5, 7],
[1, 8, 3]
]
Output: 2 (7 and 8)
*/

let greaterThanThreshold = (matrix, k) => {
  let count = 0;

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] > k) {
        count++;
      }
    }
  }

  return count;
};

console.log(
  greaterThanThreshold(
    [
      [2, 5, 7],
      [1, 8, 3],
    ],
    5
  )
);

/*
9. Find Row with Maximum Sum
Description: Return the row which has the highest sum of elements.
Input:
[
[1, 2, 3],
[4, 5, 6],
[0, 1, 1]
]
Output: [4, 5, 6]


let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [0, 1, 1],
];

let sumOfRow = 0;
let higheshtSum = -Infinity;

for (let row = 0; row < matrix.length; row++) {
  for (let col = 0; col < matrix[row].length; col++) {
    sumOfRow += matrix[row][col];
    console.log(sumOfRow, "SUM");
    if (sumOfRow > higheshtSum) {
      higheshtSum = sumOfRow;
    }
  }
}

console.log(higheshtSum);
*/

/*
7. Set Matrix Zeros
Description: If any element is 0, set its entire row and column to 0.
Input:
[
[1, 2, 3],
[4, 0, 6],
[7, 8, 9]
]
Output:
[
[1, 0, 3],
[0, 0, 0],
[7, 0, 9]
]
*/

let setMatrixZero = (matrix) => {
  let rows = new Set();
  let cols = new Set();

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == 0) {
        rows.add(i);
        cols.add(j);
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (rows.has(i) || cols.has(j)) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
};

console.log(
  setMatrixZero([
    [1, 2, 3],
    [4, 0, 6],
    [7, 8, 9],
  ])
);
