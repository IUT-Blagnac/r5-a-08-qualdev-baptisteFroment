class Robot {
    constructor() {
        this.coffeeMachineIsFilled = false;
        this.coffeeIsBrewed = false;
        this.coffeeType = '';
    }

    fillCoffeeMachineWithWater(amount) {
        console.log(`Remplissage de la machine à café avec ${amount} d'eau...`);
        this.coffeeMachineIsFilled = true;
    }

    addCoffeeToMachine(coffeeType) {
        if (this.coffeeMachineIsFilled) {
            console.log(`Ajout de ${coffeeType} à la machine...`);
            this.coffeeType = coffeeType;
        } else {
            console.log("Erreur: Veuillez d'abord remplir la machine avec de l'eau.");
        }
    }

    pressCoffeeMachineStartButton() {
        if (this.coffeeMachineIsFilled && this.coffeeType) {
            console.log(`Démarrage de la machine à café pour faire un ${this.coffeeType}...`);
            this.coffeeIsBrewed = true;
        } else {
            console.log("Erreur: La machine à café n'est pas prête ou le type de café n'est pas défini.");
        }
    }

    checkIfCoffeeIsBrewed() {
        return this.coffeeIsBrewed;
    }
}

module.exports = new Robot();
