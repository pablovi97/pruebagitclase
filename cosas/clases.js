class Vehiculo {

constructor( marca , matricula , modelo){
    this.marca = marca;
    this.matricula = matricula;
    this.modelo =  modelo;

}
}



class Cochazo extends Vehiculo{
    constructor( marca , matricula , modelo ,color ){
        super(marca , matricula , modelo);
        this.color = color;
        
    
    }
}



let coche =  new Cochazo("honda" ,"7626FXL", "civic Type S" ,"negro");


console.log(coche);


//OTRA FORMA DE HACER CLASES



function Car (marca , modelo){
    this.marca = marca;
    this.modelo = modelo;

}


let coche1 = new Car("ford" , "fiesta");

console.log(coche1);