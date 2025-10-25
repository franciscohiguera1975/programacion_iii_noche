console.log("CICLOS O BUCLES");
console.log("FOR OF");
const nombres =["Jose", "Juan", "Pedro", "Simon"];
for (const nombre of nombres){
    console.log("Hola", nombre);
}
const nombre ="francisco";
for (const letra of nombre){
    console.log("Letra ", letra);
}
numeros = [3,6,3,45,5,7];
mayor=0;
for (const numero of numeros){
    if (numero>mayor) mayor=numero;
}
console.log("el mayor es ", mayor);

const persona = {
    nombre: "Anakin",
    apellido: "Skywalker",
    profesion: "Jedi"
}
for (const clave in persona){
    console.log("clave", clave, ": ", persona[clave]);
}

const libro = {
    titulo: "caperucita roja",
    autor: "pedro perez",
    año: "1975",
    ubicacion: "estante 9"
}
suma_claves=0;
for (const clave in libro){
    suma_claves++;
}
console.log(suma_claves);