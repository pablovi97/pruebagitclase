
class Alumna {
    constructor(nombre ,apellido){
        this.nombre = nombre;
        this.apellido =  apellido;
    }
}
//CREAMOS UN MAPA
let alumnado = new Map();

alumnado.set("12413234" , new Alumna("Manuel Alejandro" ,"Perez")); 
alumnado.set("1" , "hola que tal"); 

console.log(alumnado);
console.log(alumnado.get("1"));

for(let[clave , valor] of alumnado){
    console.log(clave , valor);
}



alumnado.forEach((x, y)=> console.log(x,y));

 
//de mapa a array
let pares =  Array.from(alumnado);
console.log(pares);


//SET

let paises = new Set();

paises.add("FRANCIA");
paises.add("ALEMANIA");
paises.add("USA");

console.log(paises)

paises.forEach(x => console.log(x));