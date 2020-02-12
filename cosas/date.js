let fecha = new Date();


console.log(fecha);


// la fecha de hoy en javascript los meses empiezan en 0 terminan en 12

//si la fecha se construye mal se va a la por defecto :1970 a media noche

//internamente las fechas cuentas cuantos milisegundos hay desde 1970

/*
Date() -> fecha actutal
Date(numero) -> milisegundos desde 1970
Date(yyy-mm-dd) -> te introduce la fecha (soporta fecha japonesa y americana (usar mejor la japonesa))
CUIDADO CON EL TIMEZONE usar mejor UTC
para poner la fecha sola ponerla como texto
DATE TIENE METODOS SET Y GET 
*/
let fecha2 = new Date(1990 ,11,11);


console.log(fecha2);
               

let fecha4 = new Date(-243243);


console.log(fecha4);