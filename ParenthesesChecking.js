/** @format */

//Check for balanced parentheses in an expression
//Given an expression string exp, write a program to examine whether the pairs and the orders of “{ “, ” } ”, ”(“, ”) ”, ”[“, ”]” are correct in exp.

const parenthesesMap = {
  "}": "{",
  "]": "[",
  ")": "("
};
const parenthesesPossibleValue = ["{", "(", "["];
const matchParentheses = expression => {
  const expressionArray = expression.split("");
  const stack = [];
  if (expressionArray.length === 0) {
    return true;
  }
  for (let i = 0; i < expressionArray.length; i++) {
    if (
      stack.length > 0 &&
      parenthesesMap[expressionArray[i]] === stack[stack.length - 1]
    ) {
      stack.pop();
    } else if (parenthesesPossibleValue.includes(expressionArray[i])) {
      stack.push(expressionArray[i]);
    }
  }
  return stack.length === 0;
};
