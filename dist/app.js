"use strict";
// Implémentation de la classe Voiture qui implémente l'interface Véhicule
class Voiture {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log("Car engine started");
        alert("Car engine started");
    }
}
// Création d'une instance de la classe Voiture
const maVoiture = new Voiture("Toyota", "Corolla", 2021);
// Affichage des informations de la voiture sur la page
document.getElementById("make").textContent = maVoiture.make;
document.getElementById("model").textContent = maVoiture.model;
document.getElementById("year").textContent = maVoiture.year.toString();
// Interaction avec le bouton
document.getElementById("startButton").addEventListener("click", () => {
    maVoiture.start();
});
