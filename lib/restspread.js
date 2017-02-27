// using the spread operator to deconstruct an object

"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const person = {
  name: "Groot",
  age: 1000,
  status: "active"
};

const accountSettings = _extends({}, person, {
  status: "inactive",
  mood: "happy"
});

console.log(accountSettings);