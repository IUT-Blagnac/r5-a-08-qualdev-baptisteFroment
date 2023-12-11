Feature: Is it Friday yet?
  Everybody wants to know when it's Friday

  Scenario: Asking if it's Friday when it's Sunday
    Given it is Sunday
    When I ask if it's Friday
    Then I should be told "No"