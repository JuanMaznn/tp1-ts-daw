//1
interface AnimalI{
    nombre: string

    gritar(): string;
}

//2
class Perro implements AnimalI {
    nombre: string;

    constructor(nom: string){
        this.nombre = nom;
    }
    
    gritar(): string {
        return "guau"
    }
}

class Gato implements AnimalI {
    nombre: string;

    constructor(nom: string){
        this.nombre = nom;
    }

    gritar(): string {
        return "miau"
    }
}

class Vaca implements AnimalI {
    nombre: string;

    constructor(nom: string) {
        this.nombre = nom
    }

    gritar(): string {
        return "muu"
    }
}

// 3
function describirAnimal(animal: AnimalI): void{
    console.log(`El animal ${animal.nombre} hace ${animal.gritar()}`);
    
}

// 4
const perro = new Perro("Ciro")
const gato = new Gato("Salem")
const vaca = new Vaca("Gran Bertha")

// 5
describirAnimal(perro)
describirAnimal(gato)
describirAnimal(vaca)

//6
enum DiasSemana{
    LUNES = "Lunes",
    MARTES = "Martes",
    MIERCOLES = "Miercoles",
    JUEVES = "Jueves",
    VIERNES = "Viernes"
}

//7
let mejorJugador: number | string;

mejorJugador = "Messi"
console.log(mejorJugador);

mejorJugador = 10
console.log(mejorJugador);

//8
interface Fila<T> {
    agregar (elemento: T): void;
    
    remover(): T | undefined;
}

class ClaseGenerica<T> implements Fila<T>{
    filaNumeros: number;
    filaLetras: string;
    filaAnimales: string;
    
    constructor(fNumero: number, fLetras: string, fAnimales: string){
        this.filaNumeros = fNumero;
        this.filaLetras = fNumero;
        this.filaAnimales = fAnimales;
    }

    
}
