// let resultantValue = 0;
// let inputValue = [1, [2, [3, [4]], 5]]
// function flatten(input) {
//   for (let index = 0; index < input.length; index++) {
//     if (Array.isArray(input[index])) {
//       flatten(input[index]);
//     } else {
//       resultantValue += input[index];
//     }
//   }
//   return resultantValue;
// }
// console.log(flatten(inputValue));

// input: "SWISS"
// output: First non - repeating character - W

// function printNonReapeatingChar(word) {
//   let freq = new Map();
//   for (let char of word) {
//     freq[char] = (freq[char] || 0) + 1;
//   }
//   for (key in freq) {
//     if (freq[key] === 1) {
//       return key;
//     }
//   }
// }
// console.log(printNonReapeatingChar("SWISS"));

// const input = 'hello';
// let reversedStr = [];
// for (let index = input.length - 1; index >= 0; index--) {
//   reversedStr.push(input[index]);
// }
// console.log(reversedStr.join(''));

// let input = ['h', 'e', 'l', 'l', 'o']; // array, not string

// let left = 0;
// let right = input.length - 1;

// while (left < right) {
//   // swap characters
//   [input[left], input[right]] = [input[right], input[left]];
//   left++;
//   right--;
// }

// console.log(input.join('')); // "olleh"

// const input = [3, 5, 7, 2, 8].sort((a, b) => a - b);
// const target = 8;
// let leftCount = 0;
// let rightCount = input.length - 1;

// while (leftCount <= rightCount) {
//   let mid = Math.floor((leftCount + rightCount) / 2);
//   if (input[mid] === target) { console.log(mid); break; }
//   else if (input[mid] < target) leftCount = mid + 1;
//   else rightCount = mid - 1;
// }

// const inputCount = 4;
// let index = 2;
// let count = false;

// while (index <= Math.sqrt(inputCount)) {
//   if (inputCount % index === 0) {
//     count = true; // means it's divisible, not a prime
//     break;
//   }
//   index++;
// }

// if (inputCount <= 1) console.log('not a prime');
// else if (!count) console.log('prime');
// else console.log('not a prime');

// const rows = 4;
// for (let i = 1; i <= rows; i++) {
//   let line = '';
//   for (let j = 1; j <= rows - i; j++) {
//     line += ' ';
//   }
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     line += '*';
//   }
//   console.log(line);
// }

// const str = "fhdghirtwhdkjgshfe";
// let resultant = [];
// let obj = new Map();
// for (value of str) {
//   obj[value] = (obj[value] || 0) + 1;
// }
// for (key in obj) {
//   if (obj[key] > 1) {
//     resultant.push(key);
//   }
// }
// console.log(resultant.join(''))


// const input1 = 'abcdefg', input2 = '1234';
// const len = Math.max(input1.length, input2.length);
// let resultant = [];
// for (let index = 0; index < len; index++) {
//   if (input1[index]) resultant.push(input1[index]);
//   if (input2[index]) resultant.push(input2[index]);
// }
// console.log(resultant.join(''));

// let input = [10, 5, 3, 14, 8, 2];
// for (let iIndex = 0; iIndex < input.length; iIndex++) {
//   for (let jIndex = iIndex + 1; jIndex < input.length; jIndex++) {
//     if (input[iIndex] > input[jIndex]) {
//       [input[iIndex], input[jIndex]] = [input[jIndex], input[iIndex]]
//     }
//   }
// }
// const nonDuplicateArr = Array.from(new Set(input));
// console.log(nonDuplicateArr[1]);

// const loopCount = 30;
// for (let index = 1; index <= loopCount; index++) {
//   if (!(index % 3 === 0) && !(index % 5 === 0) && !(index % 15 === 0)) console.log(index);
//   if (index % 3 === 0) console.log('-A');
//   if (index % 5 === 0) console.log('-B');
//   if (index % 15 === 0) console.log('-AB');
// }


// let input1 = [{ id: 10, status: true }, { id: 20, status: false }, { id: 30, status: true }];
// let input2 = [{ id: 10, value: "100" }, { id: 20, value: "200" }, { id: 30, value: "300" }];
// let output = input1.map((element1) => {
//   const inputValue = input2.find(element2 => element1.id === element2.id);
//   return {
//     ...element1,
//     value: inputValue.value ?? null
//   }
// });
// console.log(output);

// vowels
// const word = 'javascript';
// let count = 0;
// for (letter of word) {
//   if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
//     count++;
//   }
// }
// console.log(count);

// palindrome
// const word = 'madam';
// if (word.length % 2 !== 0)
// let left = 0, right = word.length - 1;
// while (right > left) {
//   if (word[left] !== word[right]) {
//     console.log(false);
//     break;
//   }
//   left++;
//   right++;
// }
// console.log(true)