"use strict";

// if (4 == 9) {
//   console.log("Ok!");
// } else {
//   console.log("Error");
// }

// const num = 50;

// if (num < 49) {
//   console.log("Error");
// } else if (num > 100) {
//   console.log("Too much");
// } else {
//   console.log("Ok!");
// }

// (num === 50) ? console.log("OK!") : console.log("Eror");

// const num = 50;

// switch (num) {
//   case 49:
//     console.log("No");
//     break;
//   case 100:
//     console.log("No");
//     break;
//   case 50:
//     console.log("Yes");
//     break;
//   default:
//     console.log("Not this time");
//     break;
// }

// const hamburger = 5;
// const fries = 0;

// if (hamburger && fries) {
//   console.log("Im full");
// }

// const hamburger = 3;
// const fries = 1;
// const cola = 1;

// console.log(hamburger === 3 && cola && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && "Hello");

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if ((hamburger === 3 && cola === 2) || (fries === 3 && nuggets)) {
//   console.log("We are full");
// } else {
//   console.log("We are hungry");
// }

// console.log((hamburger === 3 && cola === 2) || (fries === 3 && nuggets));

// console.log(!0);

// // console.log(hamburger || cola || fries);

// let johnreport,
//   alexReport,
//   samReport,
//   mariaReport = "done";

// console.log(johnreport || alexReport || samReport || mariaReport);

// let num = 50;
// while (num <= 55) {
//   console.log(num);
//   num++;
// }

// do {
//   console.log(num);
//   num++;
// } while (num < 55);

// for (let i = 1; i < 10; i++) {
//   if (i === 6) {
//     // break;
//     continue;
//   }
//   console.log(i);
// }

// for (let i = 0; i < 3; i++) {
//   console.log(i);
//   for (let j = 0; j < 3; j++) {
//     console.log(j);
//   }
// }

// let result = "";
// const length = 7;

// for (let i = 1; i < length; i++) {
//   for (let j = 0; j < i; j++) {
//     result += "*";
//   }
//   result += "\n";
// }

// console.log(result);

// first: for (let i = 1; i < 3; i++) {
//   console.log(`First level: ${i}`);
//   for (let j = 0; j < 3; j++) {
//     console.log(`Second level: ${j}`);
//     for (let k = 0; k < 3; k++) {
//       if (k === 2) continue first;
//       console.log(`Third level: ${k}`);
//     }
//   }
// }

// for (let i = 5; i <= 10; i++) {
//   console.log(i);
// }

// let i = 5;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// for (let i = 20; i >= 10; i--) {
//   if (i === 13) {
//     break;
//   }
//   console.log(i);
// }

// for (let i = 2; i <= 10; i += 2) {
//   console.log(i);
// }

// for (let i = 2; i <= 16; i++) {
//   if (i % 2 === 0) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }

// let j = 2;
// while (j <= 16) {
//   if (j % 2 === 0) {
//     continue;
//   } else {
//     console.log(j);
//   }
//   j++;
// }

// function firstTask() {
//   const arr = [3, 5, 8, 12, 16, 25, 50];
//   const result = [];

//   for (let i = 0; i < arr.length; i++) {
//     result[i] = arr[i];
//   }

//   console.log(result);
// }

// firstTask();

// function secondTask() {
//   const data = [5, 10, "Shopp", 20, "Home"];
//   for (let i = 0; i < data.length; i++) {
//     if (typeof data[i] === "number") {
//       data[i] = data[i] * 2;
//     } else if (typeof data[i] === "string") {
//       data[i] = `${data[i]} - done`;
//     }
//   }

//   console.log(data);
//   return data;
// }

// secondTask();

// function thirdTask() {
//   const data = [5, 10, "Shopping", 20, "Homework"];
//   const result = [];

//   for (let i = 1; i <= data.length; i++) {
//     result[i - 1] = data[data.length - i];
//   }

//   console.log(result);
//   return result;
// }

// thirdTask();

// let result = "";
// const lines = 5;

// for (let i = 0; i <= lines; i++) {
//   for (let j = 0; j < i; j++) {
//     result += "";
//   }
//   for (let j = 0; j < 2 * i + 1; j++) {
//     result += "*";
//   }
//   result += "\n";
// }

// console.log(result);

// for (let i = 0; i < 2; i++) {
//   const a = prompt("What is the last film you watched?", ""),
//     b = +prompt("How would you rate it?", "");

//   if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log("Done");
//   } else {
//     console.log("Error");
//     i--;
//   }
// }

// let i = 0;
// while (i < 2) {
//   const a = prompt("What is the last film you watched?", ""),
//     b = +prompt("How would you rate it?", "");

//   if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log("Done");
//   } else {
//     console.log("Error");
//     i--;
//   }
// }

// let i = 0;

// do {
//   const a = prompt("What is the last film you watched?", ""),
//     b = +prompt("How would you rate it?", "");

//   if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log("Done");
//   } else {
//     console.log("Error");
//     i--;
//   }
// } while (i < 2);

// const logger = function () {
//   console.log("Hello");
// };

// logger();

// const calc = (a, b) => {
//   console.log("1");
//   return a + b;
// };

// const usd = 28;
// const discount = 0.9;

// function convert(amount, curr) {
//   return curr * amount;
// }

// function promotion(result) {
//   console.log(result * discount);
// }

// const res = convert(500, usd);
// promotion(res);

// function test() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//     if (i === 3) return;
//   }
//   console.log("Done");
// }

// test();

// function sayHello(name) {
//   return `Hello, ${name}`;
// }

// sayHello("Alex");

// function returnNeighboringNumbers(num) {
//   return [num - 1, num, num + 1];
// }

// returnNeighboringNumbers(5);

// function getMathResult(base, times) {
//   if (typeof times !== "number" || times <= 0) {
//     return base;
//   }

//   let str = "";

//   for (let i = 1; i <= times; i++) {
//     if (i === times) {
//       str += `${base * i}`;
//     } else {
//       str += `${base * i}---`;
//     }
//   }
//   return str;
// }

// getMathResult(5, 3);

// const str = "test";

// console.log(str.toUpperCase());
// console.log(str);

// const fruit = "Some fruit";

// console.log(fruit.indexOf("fruit"));

// const logg = "Hello World";

// console.log(logg.slice(6, 11));

// const num = 12.2;
// console.log(Math.round(num));

// function findMaxNumber(a, b, c, d) {
//   if (
//     typeof a !== "number" ||
//     typeof b !== "number" ||
//     typeof c !== "number" ||
//     typeof d !== "number"
//   ) {
//     return 0;
//   } else {
// //     console.log(Math.max(a, b, c, d));
// //   }
// // }

// // findMaxNumber(2, 1, 33, 4);

// function first() {
//   setTimeout(function () {
//     console.log(1);
//   }, 500);
// }

// function second() {
//   console.log(2);
// }

// first();
// second();

// function learnJs(lang, callback) {
//   console.log(`I learn ${lang}`);
//   callback();
// }

// function done() {
//   console.log("I finished this lesson");
// }

// learnJs("JavaScript", done);

// const options = {
//   name: "test",
//   width: 1024,
//   height: 1024,
//   colors: {
//     border: "black",
//     bg: "red",
//   },
//   makeTest: function () {
//     console.log("Test");
//   },
// };

// options.makeTest();

// const { border, bg } = options.colors;
// console.log(border);

// console.log(Object.keys(options).length);

// delete options.name;

// console.log(options);

// let counter = 0;

// for (let key in options) {
//   if (typeof (options[key] === "object")) {
//     for (let i in options[key]) {
//       console.log(`Property ${i} has value ${options[key][i]}`);
//       counter++;
//     }
//   } else {
//     console.log(`Property ${key} has value ${options[key]}`);
//     counter++;
//   }
// }

// function showExperience(object) {
//   const { exp } = object.skills;
//   console.log(exp);
// }

// showExperience(personalPlanPeter);

// function showProgrammingsLangs(plan) {
//   let str = "";
//   const { programmingLangs } = plan.skills;

//   for (let key in programmingLangs) {
//     str += `Language ${key} learned at ${programmingLangs[key]}\n`;
//   }

//   console.log(str);
// }

// showProgrammingsLangs(personalPlanPeter);

// const arr = [1, 20, 13, 42, 15];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//   return a - b;
// }

//  arr.pop();
// arr.push(6);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let value of arr) {
//   console.log(value);
// }

// arr.forEach(function (item, i, arr) {
//   console.log(`${i}: ${item} inside array ${arr}`);
// });

// const str = prompt("", "");
// const products = str.split(", ");
// console.log(products.join("; "));

// function copyObj(mainObj) {
//   let objCopy = {};
//   for (let key in mainObj) {
//     objCopy[key] = mainObj[key];
//   }
//   return objCopy;
// }

// const numbers = {
//   a: 2,
//   b: 5,
//   c: {
//     x: 7,
//     y: 4,
//   },
// };

// const newNumbers = copyObj(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10;

// console.log(newNumbers);
// console.log(numbers);

// const add = {
//   d: 17,
//   e: 20,
// };
// console.log(Object.assign(numbers, add));

// const clone = Object.assign({}, add);

// clone.d = 20;
// console.log(add);
// console.log(clone);

// const oldArray = ["a", "b", "c"];
// const newArray = oldArray.slice();

// newArray[1] = "changed";

// console.log(newArray);
// console.log(oldArray);

// const video = ["youtube", "vimeo", "rutube"],
//   blogs = ["wordpress", "livejournal", "blogger"],
//   internet = [...video, ...blogs, "vk", "facebook"];

// console.log(internet);

// function log(a, b, c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);

// const personalPlanPeter = {
//   name: "Peter",
//   age: "29",
//   skills: {
//     languages: ["ru", "eng"],
//     programmingLangs: {
//       js: "20%",
//       php: "10%",
//     },
//     exp: "1 month",
//   },
// };

// function showExperience(plan) {
//   const { exp } = plan.skills;
//   console.log(exp);
// }

// showExperience(personalPlanPeter);

// function showProgrammingsLangs(plan) {
//   let str = "";
//   const programmingLangs = plan.skills.programmingLangs;

//   for (let key in programmingLangs) {
//     str += `Language ${key} learned at ${programmingLangs[key]}`;
//     console.log(str);
//   }
// }

// showProgrammingsLangs(personalPlanPeter);

// const someString = "This is some strange string";

// function reverse(str) {
//   return str.split("").reverse();
//   console.log(someString);
// }

// reverse(someString);

// const soldier = {
//   helath: 400,
//   armor: 100,
//   sayHello: function () {
//     console.log("Hello");
//   },
// };

// const John = {
//   health: 100,
// };

// John.__proto__ = soldier;

// // console.log(John.armor);
// John.sayHello();

const shoppingMallData = {
  shops: [
    {
      width: 10,
      length: 5,
    },
    {
      width: 15,
      length: 7,
    },
    {
      width: 20,
      length: 5,
    },
    {
      width: 8,
      length: 10,
    },
  ],
  height: 5,
  moneyPer1m3: 30,
  budget: 50000,
};

function isBudgetEnough(data) {
  let square = 0;
  let volume = 0;

  data.shops.forEach((shop) => {
    square += shop.width * shop.length;
  });

  volume = data.height * square;

  if (data.budget - volume * data.moneyPer1m3 >= 0) {
    return "Ok";
  } else {
    return "No";
  }
}

isBudgetEnough(shoppingMallData);
