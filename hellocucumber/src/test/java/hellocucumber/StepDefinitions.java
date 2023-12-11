package hellocucumber;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;
import io.cucumber.java.en.Then;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class StepDefinitions {

    private String today;
    private String actualAnswer;

    @Given("an example scenario")
    public void anExampleScenario() {
    }

    @When("all step definitions are implemented")
    public void allStepDefinitionsAreImplemented() {
    }

    @Then("the scenario passes")
    public void theScenarioPasses() {
    }

    @Given("it is Sunday")
    public void it_is_sunday() {
        this.today = "Sunday";
    }

    @When("I ask if it's Friday")
    public void i_ask_if_it_s_friday() {
        this.actualAnswer = IsItFriday.isItFriday(today);
    }

    @Then("I should be told {string}")
    public void i_should_be_told(String expectedAnswer) {
        assertEquals(expectedAnswer, actualAnswer);
    }
    
}

class IsItFriday {
    static String isItFriday(String today) {
        return "Friday".equalsIgnoreCase(today) ? "Yes" : "No";
    }
}
