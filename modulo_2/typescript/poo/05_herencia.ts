export class Vehiculo{
    public marca: string;
    constructor(marca: string){
        this.marca=marca;
    }
    moverse(): void{
        console.log(this.marca, 'se encuentra en movimiento');
    }
}
class Moto extends Vehiculo {};
const miMoto = new Moto('honda');
miMoto.moverse();
