/*

2. Diseñar una función que acepta un argumento x y que muestre los siguientes mensajes:

a) ‘Este es muy fácil... ¡prueba otro!’, si x es 0

b) ‘El número es par’, si x es 2, 4 ó 6

c) ‘El número es impar’, si x es 1, 3 ó 5d)‘¡¡Sólo sé contar de 0 a 6!!’, para los demás casos 

*/

//var x =readline("introduce un parametro");

//console.log(x);


"use strict"

mensajes(6);


function mensajes(x){

    if(x===0){
        console.log("Este es muy fácil... ¡prueba otro!");

    }if(x%2===0){
        console.log("el numero es par ");
    }if(x%2!=0){
        console.log("¡¡Sólo sé contar de 0 a 6!!’");
    }
return
}