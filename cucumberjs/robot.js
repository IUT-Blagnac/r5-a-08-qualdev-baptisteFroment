class Robot {
    constructor() {
        this.coffeeMachineIsFilled = false;
        this.coffeeIsBrewed = false;
    }

    fillCoffeeMachineWithWater() {
        console.log("Remplissage de la machine à café avec de l'eau...");
        this.coffeeMachineIsFilled = true;
    }

    addCoffeeToMachine() {
        if (this.coffeeMachineIsFilled) {
            console.log("Ajout de café à la machine...");
        } else {
            console.log("Erreur: Veuillez d'abord remplir la machine avec de l'eau.");
        }
    }

    pressCoffeeMachineStartButton() {
        if (this.coffeeMachineIsFilled) {
            console.log("Démarrage de la machine à café...");
            this.coffeeIsBrewed = true;
        } else {
            console.log("Erreur: La machine à café n'est pas prête.");
        }
    }

    checkIfCoffeeIsBrewed() {
        return this.coffeeIsBrewed;
    }
}

module.exports = new Robot(); 
