console.log("FUNCIONES");
console.log("Función Simple");
function saludar(){
    console.log("Hola de parte del Poderoso Tercer Semestre");
}
saludar();

console.log("Función con Parametros");
function suma(a, b){
    return  a+b;
}
console.log("resultado de la suma es: ", suma(5,8));

console.log("Función Flecha");
const funcionFlecha=()=>{
    console.log("Saludando desde una función flecha")
}
funcionFlecha();
const multiplicacion=(n,m)=>{
    return n*m;
}
console.log(multiplicacion(7,7));

console.log("Función retorno directo");
const cuadrado = x=>x*x;
console.log(cuadrado(5));

console.log("Función con Parametros por defecto");
function division(z, k=3){
    return  z/k;
}
console.log("resultado de la division es: ", division(40,8));
console.log("resultado de la division es: ", division(40));