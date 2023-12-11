package hellocucumber;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;
import io.cucumber.java.en.Then;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class StepDefinitions {

    private String today;
    private String actualAnswer;

    @Given("today is {string}")
    public void today_is(String day) {
        this.today = day;
    }

    @When("I ask whether it's Friday yet")
    public void i_ask_whether_it_s_Friday_yet() {
        this.actualAnswer = IsItFriday.isItFriday(today);
    }

    @Then("I should be told {string}")
    public void i_should_be_told(String expectedAnswer) {
        assertEquals(expectedAnswer, actualAnswer);
    }
    // Ajoutez ces méthodes à votre classe StepDefinitions

    @Given("an example scenario")
    public void an_example_scenario() {
        // Vous pouvez laisser cette méthode vide si elle ne nécessite pas d'action spécifique
    }

    @When("all step definitions are implemented")
    public void all_step_definitions_are_implemented() {
        // Vous pouvez laisser cette méthode vide si elle ne nécessite pas d'action spécifique
    }

    @Then("the scenario passes")
    public void the_scenario_passes() {
        // Vous pouvez laisser cette méthode vide si elle ne nécessite pas d'action spécifique
    }

}

class IsItFriday {
    static String isItFriday(String today) {
        if ("Friday".equalsIgnoreCase(today)) {
            return "TGIF";
        } else {
            return "No";
        }
    }
}
