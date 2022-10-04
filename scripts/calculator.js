"use strict";

const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const multiply = (num1, num2) => num1 * num2;

const divide = (num1, num2) => {
  if (!num2 || num2 === 0) throw "Zero division error";

  return num1 / num2;
};

const calculator = (num1, num2, operator) => {
  if (typeof num1 !== "number") throw "Parameter 'num1' must be a valid number";
  if (typeof num2 !== "number") throw "Parameter 'num1' must be a valid number";
  if (typeof operator !== "function")
    throw "Parameter 'operator' must be a valid function";

  return operator(num1, num2);
};
