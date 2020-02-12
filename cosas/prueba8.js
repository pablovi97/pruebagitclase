/*

8.Genera una lista que contenga el cuadrado de los números 
pares y el cubo de los impares entre 1 y 100 (inclusive).


*/

var lista =[];

for(var i = 0 ; i<=100 ; i++){

    if(i%2 == 0){

       lista[i] = i*i;
       
    }else{
        lista[i] = i*i*i;
       
    }



}

console.log(lista);
