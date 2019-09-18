var add = function(number1, number2) {
  return number1 + number2;
};

var number1 = parseInt(prompt("Enter a number(addition):"));
var number2 = parseInt(prompt("Enter another number:"));
var result = add(number1, number2);
alert(result);
var subtract = function(number1, number2) {
  return number1 - number2;
};
var number1 = parseInt(prompt("Enter a number(subtraction):"));
var number2 = parseInt(prompt("Enter another number:"));
alert(subtract(number1, number2));
var multiply = function(number1, number2) {
  return number1 * number2;
};
var number1 = parseInt(prompt("Enter a number:(multiplication)"));
var number2 = parseInt(prompt("Enter a number:"));
alert(multiply(number1, number2));
var division = function(number1, number2) {
  return number1 / number2;
};
var number1 = parseInt(prompt("Enter a number:(division)"));
var number2 = parseInt(prompt("Enter a number"));
alert(division(number1, number2));
