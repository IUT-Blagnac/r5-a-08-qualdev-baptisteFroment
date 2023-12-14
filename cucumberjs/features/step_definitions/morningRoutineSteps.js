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

Then('I sit down with my coffee', function () {
  console.log("Sitting down with my coffee.");
});

Then('I read the top headlines from {string}', function (newsSource) {
  console.log(`Reading the top headlines from ${newsSource}.`);
  assert.ok(true, `Headlines from ${newsSource} read.`);
});

Given('I am dressed in {string}', function (exerciseAttire) {
  console.log(`Dressed in ${exerciseAttire} for morning exercise.`);
});

When('I start my morning exercise routine', function () {
  console.log("Starting morning exercise routine.");
});

Then('I complete a {string}-minute workout', function (exerciseDuration) {
  console.log(`Completed a ${exerciseDuration}-minute workout.`);
});

Given('I have my laptop ready', function () {
  console.log("Laptop is ready for checking emails.");
});

When('I open my email application', function () {
  console.log("Opening email application.");
});

Then('I check and respond to urgent emails', function () {
  console.log("Checking and responding to urgent emails.");
  assert.ok(true, "Checked and responded to urgent emails.");
});
