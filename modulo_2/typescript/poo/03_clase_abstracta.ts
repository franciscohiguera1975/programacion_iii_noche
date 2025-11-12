abstract class Animal{
    abstract emitirSonido(): void;

    dormir(): void{
        console.log('Zzzzzz...');
    }
}
class Perro extends Animal{
    emitirSonido(): void {
        console.log('Guau');
    }
}
const dog = new Perro();
dog.emitirSonido();
dog.dormir();