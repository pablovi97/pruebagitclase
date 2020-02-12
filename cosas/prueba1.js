
/*
1. Implementar el control de 3 variables (a, b, c) para que se muestre un mensaje de error cuando seproduzca alguna de las siguientes situaciones:

a) Al menos una de las 3 variables es negativa

b) Las tres variables son iguales a 0

c) Las suma de las 3 variables es mayor que 10 Y las tres variables son diferentes
*/
"use strict"

var a =8;
var b = 7;
var c = 2;



if(a<0 && b<0 && c<0){
console.log("hay almenos un numero negativo");
}else{
    console.log("no hay numero negativo")
}
if(a===0 && b===0 && c===0){
    console.log("hay almenos un numero igual a 0");
}else{
    console.log("no hay numeros igual a 0")
}

diferentesYmayores10(a,b,c);
function diferentesYmayores10(a,b,c){


    if(a+b+c>10){

        if(a!=b && b!=c && c!=a ){
        console.log("las variables son mayores que 10 y son diferentes");
        }
    }else{
        if(a!=b && b!=c && c!=a ){
            console.log("las variables son menores que 10 y son diferentes");
            }
      
    }


return
    
}