// Your code here
function saturdayFun(parm="roller-skate"){
  return `This Saturday, I want to ${parm}!`
}

function mondayWork(parm="go to the office"){
  return `This Monday, I will ${parm}.`
}

let wrapAdjective = function(something="*") {
  return function(somethingElse="special") {
    return `You are ${something}${somethingElse}${something}!`
  }
}

let Calculator = {
  add: function(a,b){
    return a + b
  },
  subtract: function(a,b){
    return a - b
  },
  multiply: function(a,b){
    return a * b
  },
  divide: function(a,b){
    return a / b
  }
}
function actionApplyer(start, ray){
  let x = start
  for (let i = 0; i < ray.length; i++){
    x = ray[i](x)
  }
  return x
}