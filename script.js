class Ninja {
    constructor (nombre, salud, velocidad, fuerza){
        this.nombre = nombre;
        this.salud = 10;
        this.velocidad = 3;
        this.fuerza = 3;  
    }
    sayName(){
        console.log(`El nombre de este gran Ninja es: ${this.nombre}`);
    }
    showStats(){
        console.log(`Ninja: ${this.nombre}, Salud Estado: ${this.salud}, Velocidad: ${this.velocidad}, Fuerza: ${this.fuerza}`);
    }
    drinkSake(){
        this.salud += 10;
        console.log(`${this.nombre} Salud Estado Actual: ${ninja1.salud}`);
    }
    
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
console.log(ninja1);


