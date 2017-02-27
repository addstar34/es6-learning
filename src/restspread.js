// using the spread operator to deconstruct an object

"use strict";

const person = {
  name: "Groot",
  age: 1000,
  status: "active"
};

const accountSettings = {
  ...person,
  status: "inactive",
  mood: "happy"
};

console.log(accountSettings);
