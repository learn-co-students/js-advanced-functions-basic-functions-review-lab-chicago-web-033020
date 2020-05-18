// Your code here
function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair="*") {
  return function(word = "special") {
    return `You are ${flair}${word}${flair}!`
  }
}

const Calculator = {
  add,
  subtract,
  multiply, 
  divide
}

function add(num1, num2) {
  return num1 + num2
}

function subtract(num1, num2) {
  return num1 - num2
}

function multiply(num1, num2) {
  return num1 * num2
}

function divide(num1, num2) {
  return num1 / num2
}

function actionApplyer(start, arr) {
  if (arr.length == 0) {
    return start
  } else {
    for (let i = 0; i < arr.length; i ++) {
      start = arr[i](start)
    }
  }
  return start
}