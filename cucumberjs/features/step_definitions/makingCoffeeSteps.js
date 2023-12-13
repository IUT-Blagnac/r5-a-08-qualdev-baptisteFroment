const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const robot = require('./../../robot');

Given('the coffee machine is filled with water and coffee', function () {
  robot.fillCoffeeMachineWithWater();
  robot.addCoffeeToMachine();
});

When('I press the coffee machine\'s start button', function () {
  robot.pressCoffeeMachineStartButton();
});

Then('a hot cup of coffee is brewed', function () {
  let coffeeIsReady = robot.checkIfCoffeeIsBrewed();
  assert(coffeeIsReady, 'A hot cup of coffee should be brewed');
});
