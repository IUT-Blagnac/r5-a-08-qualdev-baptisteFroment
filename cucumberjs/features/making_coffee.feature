Feature: Making Morning Coffee

  Scenario: Brewing a cup of coffee
    Given the coffee machine is filled with "200ml" of water
    And "Espresso" coffee is added to the machine
    When I press the coffee machine's start button
    Then a hot cup of "Espresso" coffee is brewed
