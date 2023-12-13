const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const robot = require('../../robot');

Given('the coffee machine is filled with {string} of water', function (waterAmount) {
  robot.fillCoffeeMachineWithWater(waterAmount);
});

Given('{string} coffee is added to the machine', function (coffeeType) {
  robot.addCoffeeToMachine(coffeeType);
});

When('I press the coffee machine\'s start button', function () {
  robot.pressCoffeeMachineStartButton();
});

Then('a hot cup of {string} coffee is brewed', function (coffeeType) {
  let coffeeIsReady = robot.checkIfCoffeeIsBrewed();
  assert(coffeeIsReady, `A hot cup of ${coffeeType} coffee should be brewed`);
});
