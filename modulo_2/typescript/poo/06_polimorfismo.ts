import { Vehiculo } from "./05_herencia";


class Camion extends Vehiculo {
    private capacidadCarga: number=0;
    setCapacidad(capacidad: number):void{
        this.capacidadCarga = capacidad;
    };
    getCapacidad(): number{
        return this.capacidadCarga;
    }
};
const miCamion = new Camion('Ford');
miCamion.setCapacidad(500);
console.log('capacidad', miCamion.getCapacidad(), 'kg. ');
miCamion.moverse();
