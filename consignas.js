"use strict";
//2
class Perro {
    nombre;
    constructor(nom) {
        this.nombre = nom;
    }
    gritar() {
        return "guau";
    }
}
class Gato {
    nombre;
    constructor(nom) {
        this.nombre = nom;
    }
    gritar() {
        return "miau";
    }
}
class Vaca {
    nombre;
    constructor(nom) {
        this.nombre = nom;
    }
    gritar() {
        return "muu";
    }
}
// 3
function describirAnimal(animal) {
    console.log(`El animal ${animal.nombre} hace ${animal.gritar()}`);
}
// 4
const perro = new Perro("Ciro");
const gato = new Gato("Salem");
const vaca = new Vaca("Gran Bertha");
// 5
describirAnimal(perro);
describirAnimal(gato);
describirAnimal(vaca);
