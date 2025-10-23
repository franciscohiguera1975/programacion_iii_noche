console.log("VARIABLES");
var saludo1="HOLA";
var saludo2="HOLA DESDE UNA VARIABLE";
console.log(saludo1);

console.log(saludo1+" "+saludo2);
console.log(`${saludo1} ${saludo2} ${4+5}`);
let numero = 24;
const angulo = 45;
console.log(numero, angulo);

console.log("TIPOS DE DATOS");
var nombre="Darth Vader";
console.log("String ", typeof(nombre));
var tipoNumero=44444;
console.log("Tipo Numerico ", typeof(tipoNumero));
var tipoBooleano=true;
console.log("Tipo Booleano ", typeof(tipoBooleano));
var tipoIndefinido=undefined;
console.log("Tipo Indefinido ", typeof(tipoIndefinido));
var tipoNula=null;
console.log("Tipo Nula ", typeof(tipoNula));
var tipoSimbolo=Symbol("clave");
console.log("Tipo Simbolo ", typeof(tipoSimbolo));
var tipoBigEntero=432424n;
console.log("Tipo Big Entero ", typeof(tipoBigEntero));


const persona = {
    nombre: "Carlos",
    edad: 30
}
console.log("Tipo Objeto ", typeof(persona));
console.log(persona);
console.log(persona.edad);
console.log(persona.nombre);