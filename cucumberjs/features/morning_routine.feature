Feature: Morning Routine

  Scenario Outline: Brewing a cup of coffee and Reading Morning News
    Given the coffee machine is filled with "<waterAmount>" of water
    And "<coffeeType>" coffee is added to the machine
    When I press the coffee machine's start button
    Then a hot cup of "<coffeeType>" coffee is brewed
    And I sit down with my coffee
    And I read the top headlines from "<newsSource>"

    Examples:
      | waterAmount | coffeeType | newsSource        |
      | 200ml       | Espresso   | The New York Times|
      | 150ml       | Americano  | BBC News          |
      | 250ml       | Latte      | Reuters           |

  Scenario Outline: Morning Exercise
    Given I am dressed in "<exerciseAttire>"
    When I start my morning exercise routine
    Then I complete a "<exerciseDuration>"-minute workout

    Examples:
      | exerciseAttire   | exerciseDuration |
      | workout clothes  | 15               |
      | yoga mat and gear| 20               |
      | jogging outfit   | 30               |

  Scenario: Checking Emails
    Given I have my laptop ready
    When I open my email application
    Then I check and respond to urgent emails

