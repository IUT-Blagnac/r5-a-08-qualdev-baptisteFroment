package dojo;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import static org.junit.Assert.*;
import java.util.List;

public class StepDefinitions {
    private Order order;

    // Paramétrer le nom de la personne qui veut acheter le verre
    @Given("^(.*) who wants to buy a drink$")
    public void person_who_wants_to_buy_a_drink(String ownerName) {
        order = new Order();
        order.declareOwner(ownerName);
    }

    // Paramétrer le nom de la personne pour qui on commande le verre
    @When("^an order is declared for (.*)$")
    public void an_order_is_declared_for(String targetName) {
        order.declareTarget(targetName);
    }

    @Then("there is no cocktail in the order")
    public void there_is_no_cocktail_in_the_order() {
        List<String> cocktails = order.getCocktails();
        assertEquals(0, cocktails.size());
    }

    // Scénario pour paramétrer le nombre de cocktails
    // Ajoutez un nouveau scénario dans le fichier de feature et une méthode correspondante ici
}
