//1
interface Animal {
  nombre: string;

  gritar(): string;
}

//2
class Perro implements Animal {
  nombre: string;

  constructor(nom: string) {
    this.nombre = nom;
  }

  gritar(): string {
    return "guau";
  }
}

class Gato implements Animal {
  nombre: string;

  constructor(nom: string) {
    this.nombre = nom;
  }

  gritar(): string {
    return "miau";
  }
}

class Vaca implements Animal {
  nombre: string;

  constructor(nom: string) {
    this.nombre = nom;
  }

  gritar(): string {
    return "muu";
  }
}

// 3
function describirAnimal(animal: Animal): void {
  console.log(`El animal ${animal.nombre} hace ${animal.gritar()}`);
}

// 4
const perro: Perro = new Perro("Ciro");
const gato: Gato = new Gato("Salem");
const vaca: Vaca = new Vaca("Gran Bertha");

// 5
describirAnimal(perro);
describirAnimal(gato);
describirAnimal(vaca);

//6
enum DiasSemana {
  LUNES = "Lunes",
  MARTES = "Martes",
  MIERCOLES = "Miercoles",
  JUEVES = "Jueves",
  VIERNES = "Viernes",
  SABADO = "Sabado",
  DOMINGO = "Domingo",
}

//7
let mejorJugador: number | string;

mejorJugador = "Messi";
console.log(mejorJugador);

mejorJugador = 10;
console.log(mejorJugador);

//8
interface Fila<T> {
  agregar(elemento: T): void;

  remover(): T | undefined;
}

class ClaseGenerica<T> implements Fila<T> {
  elementos: T[];

  constructor() {
    this.elementos = [];
  }

  agregar(elemento: T): void {
    this.elementos.push(elemento);
  }

  remover(): T | undefined {
    return this.elementos.shift();
  }
}

//9
const filaNumeros: Fila<number> = new ClaseGenerica<number>();
const filaLetras: Fila<string> = new ClaseGenerica<string>();
const filaAnimales: Fila<Animal> = new ClaseGenerica<Animal>();

//10
filaNumeros.agregar(7);
filaNumeros.agregar(10);
filaNumeros.agregar(23);

filaLetras.agregar("hola");
filaLetras.agregar("chau");
filaLetras.agregar("buenas");

filaAnimales.agregar(perro);
filaAnimales.agregar(gato);
filaAnimales.agregar(vaca);

console.log(filaNumeros.remover());
console.log(filaLetras.remover());
console.log(filaAnimales.remover());
