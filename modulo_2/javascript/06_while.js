console.log("CICLOS O BUCLES");
console.log("WHILE");
let i=1;
while(i<=3){
    console.log("Contador: ", i);
    i++;
}

let valores=[3,4,2,4,5];
let indice=0;
while (valores[indice]>0){
    console.log("valor valido:", valores[indice]);
    indice++;
}

let n=1;
while (n<10){
    if(n%2!==0){
        console.log(n, " es impar");
    }
    n++;
}



let x=1;
do {
   console.log(" iteración ", x);
   x++;
} while (x<5);
    


let contador=1;
suma=0;
do {
   suma+=contador;
   contador++;
} while (contador<=5);
console.log(" la suma es ", suma);
    
let reduccion=10;
do {
   console.log("reduccion ", reduccion);
   reduccion--;
} while (reduccion>=0);



let numero=1;
do {
   console.log(`${numero}*6=${numero*6}`);
   console.log(numero,"*", 6, "=", numero*6);
   numero++;
} while (numero<=10);







