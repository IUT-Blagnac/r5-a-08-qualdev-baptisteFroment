Feature: Is it Friday yet?
  Everybody wants to know when it's Friday

  Scenario: Asking if it's Friday when it's Sunday
    Given it is Sunday
    When I ask if it's Friday
    Then I should be told "No"

  Scenario: Friday is Friday
    Given today is Friday
    When I ask whether it's Friday yet
    Then I should be told "TGIF"