/*
7. En el ejercicio anterior, añadir un argumento opcional 
booleano de forma que si está a `False` (valor por defecto)
 devuelve sólo el resultado numérico (p.ej: `24`), mientras que si 
se indica `True` le añade la unidad `ºC` (p.ej `24ºC`).

*/




conversionFtoC(67 ,true);

function conversionFtoC (farenheit , pivot){

    var celsius = (farenheit - 32) * 5/9;

if(pivot){
    console.log(celsius + "ºC");
}else{
    console.log(celsius);
}



return
}

