
var calculatorModule = (function() {
  var memory = 0;
  var total = 0;
  var calculator = {};

  calculator.load = function(x) {
    if(typeof x !== "number"){
      throw new Error("Does not compute!  Please input numbers.");
    }
    total = x;
    return total;
  };

   calculator.getTotal = function() {
    return total;
   };

   calculator.add = function(x){
    if(typeof x !== "number"){
      throw new Error("Does not compute!  Please input numbers.");
    }
      total += x;
      return total;
    };

   calculator.subtract = function(x) {
    if(typeof x !== "number"){
      throw new Error("Does not compute!  Please input numbers.");
    }
      total -= x;
      return total;
   };

    calculator.multiply = function(x) {
      if(typeof x !== "number"){
      throw new Error("Does not compute!  Please input numbers.");
    }
      total*= x;
      return total;
    };

   calculator.divide = function(x) {
    if(typeof x !== "number"){
      throw new Error("Does not compute!  Please input numbers.");
    }
    total /=x;
   };

   calculator.recallMemory = function() {
    return memory;
   };

   calculator.saveMemory = function() {
    memory = total;
   };

   calculator.clearMemory = function() {
    memory = 0;
   };

   if(typeof x !== "number"){

   }
  return calculator;
});

var myCalc = calculatorModule();
myCalc.load(9000);
console.log(myCalc.getTotal());