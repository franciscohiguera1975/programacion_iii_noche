abstract class CuentaBase{
    private saldo: number=0;
    abstract operar(): void;

    modificarSaldo(monto: number): void{
        this.saldo=monto;
    }
    consultarSaldo(): number{
        return this.saldo;
    }
}
class CuentaAhorro extends CuentaBase{
    operar(): void {
        console.log('Operando desde Cuenta Ahorro')
    }   
}
class CuentaCorriente extends CuentaBase{
    operar(): void {
        console.log('Operando desde Cuenta Corriente')
    }
}
const myCuentaAhorro = new CuentaAhorro();
myCuentaAhorro.modificarSaldo(600);
myCuentaAhorro.operar();
console.log('saldo cuenta ahorro',
     myCuentaAhorro.consultarSaldo());

const myCuentaCorriente = new CuentaCorriente();
myCuentaCorriente.modificarSaldo(1600);
myCuentaCorriente.operar();
console.log('saldo cuenta corriene',
     myCuentaCorriente.consultarSaldo());