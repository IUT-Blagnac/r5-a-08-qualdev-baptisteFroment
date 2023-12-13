Feature: Making Morning Coffee

  Scenario Outline: Brewing a cup of coffee
    Given the coffee machine is filled with "<waterAmount>" of water
    And "<coffeeType>" coffee is added to the machine
    When I press the coffee machine's start button
    Then a hot cup of "<coffeeType>" coffee is brewed

    Examples:
      | waterAmount | coffeeType |
      | 200ml       | Espresso   |
      | 150ml       | Americano  |
      | 250ml       | Latte      |
