



function cogeElem() {




var parrafo = document.getElementById("presentacion");

if(parrafo){
console.log(parrafo.innerText);
console.log(parrafo.outerText);
console.log(parrafo.innerHTML);
console.log(parrafo.textContent);

}
array  =["hola" ,"don" ,"pepito" ,"hola " ,"don jose"]
//Array.from( document.getElementById("milista1").getElementsByTagName("li")).forEach((x ,i) =>  x.outerHTML ="<p>"+ array[i] +"</p>" );

var parrafo = Array.from(document.getElementById("milista1").getElementsByTagName("li"));
//SIEMPRE CASTEAR A ARRAY
var i = 0;
for(let value of parrafo){

value.outerHTML ="<p>"+ array[i] +"</p>";
i++;
}






    var elem = document.getElementById("milista1");
    if (elem) {
        elem.style.border = "1px dashed red";

    }
    var items = document.getElementsByTagName("li");
    console.log("Nº de elementos", items.length)

    Array.from(items).forEach(element => {
        element.style.backgroundColor = "red";
    });


    console.log(typeof items)
    //for (at in elem){
    //console.log(at);
    //}
    //alert("SDGS")
    Array.from(document.getElementById("milista1")
        .getElementsByClassName("impar")).forEach(x => x.style.backgroundColor = "green");


    //document.getElementById("milista2").getElementsByTagName("li").forEach(x => x.style.backgroundColor = "purple");
    //document.querySelectorAll("#milista2 > li").forEach( x => x.style.backgroundColor = "yellow");

}
