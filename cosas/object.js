let obj = {    //asi definimos un objeto


    edad: 25,
    cumple: function () { edad += 1 },
//se puede hacer subobjetos
    identificacion: {
        dni: "34234234",
        pasaporte : "2452435"

    }


};

//dos formas de acceder a los datos del objeto
console.log(obj.edad);
// si no conoce la edad es undefined
console.log(obj["edad"]);

//puedo crear atributos furea

/*
obj["edad hermano "] = 23;
console.log(obj["edad hermano"]);
*/

for (let x in obj) {

    console.log(x, "==>", obj[x])

}