/*
1. Zig-Zag Sort (Easy to Moderate)
Problem:
You are given an array of numbers. Rearrange the array so that the elements follow a zig-zag
pattern: arr[0] < arr[1] > arr[2] < arr[3] > arr[4] ...
Example Input:
[4, 3, 7, 8, 6, 2, 1]
Example Output:
[3, 7, 4, 8, 2, 6, 1]
Note: You only need to make adjacent comparisons and swaps; do not sort the entire array
*/

const zigzag = (array) => {
  const swap = (i, j) => {
    [array[i], array[j]] = [array[j], array[i]];
  };

  for (let i = 0; i < array.length - 1; i++) {
    const evenIndex = i % 2 === 0;

    if (
      (evenIndex && array[i] > array[i + 1]) ||
      (!evenIndex && array[i] < array[i + 1])
    ) {
      swap(i, i + 1);
    }
  }

  return array;
};

console.log(zigzag([4, 3, 7, 8, 6, 2, 1]));

/*
5. Rotate Array by K (Easy to Moderate)
Problem:
Write a function to rotate an array to the right by k steps.
Example Input:
rotateArray([1, 2, 3, 4, 5, 6, 7], 3);
Example Output:
[5, 6, 7, 1, 2, 3, 4]
Note: Do not use .splice() or .slice() if you want to challenge students on logic.
*/
let rotateArray = (array, k) => {
  for (let i = 1; i <= k; i++) {
    let lastEl = array.pop();
    array.unshift(lastEl);
  }

  return array;
};

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));

/*
Group Anagrams (Moderate)
Problem:
Group the anagrams from the given list of words.
Two words are anagrams if they contain the same characters in a different order.
Example Input:
["eat", "tea", "tan", "ate", "nat", "bat"]
Example Output:
[
["eat", "tea", "ate"],
["tan", "nat"],
["bat"]
]
Hint: Use a Map with sorted strings as keys.
*/

const arrOfWords = ["eat", "tea", "tan", "ate", "nat", "bat"];
const map = new Map();

for (let word in arrOfWords) {
  const key = arrOfWords[word].split("").sort().join("");

  if (!map.has(key)) {
    map.set(key, []);
  }

  map.get(key).push(arrOfWords[word]);
}

const anagrams = Array.from(map.values());
console.log(anagrams);
