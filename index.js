// Your code here
function saturdayFun(activity = "roller-skate"){
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office"){
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(char="*"){
  return function(string){
    return `You are ${char}${string}${char}!`
  }
}

const Calculator = {
  add: function(numOne, numTwo){
    return numOne + numTwo
  },

  subtract: function(numOne, numTwo){
    return numOne - numTwo
  },

  multiply: function(numOne, numTwo){
    return numOne * numTwo
  },

  divide: function(numOne, numTwo){
    return numOne / numTwo
  }
}

let actionApplyer = function(int, arr){
  let total = int
  for(let i=0; i < arr.length; i++){
    total = arr[i](total)
  }
return total
}
