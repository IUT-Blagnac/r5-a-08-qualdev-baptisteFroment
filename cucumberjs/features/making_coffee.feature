Feature: Making Morning Coffee

  Scenario: Brewing a cup of coffee
    Given the coffee machine is filled with water and coffee
    When I press the coffee machine's start button
    Then a hot cup of coffee is brewed
