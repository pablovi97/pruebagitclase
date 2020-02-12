function eventos(){


if(location.search){
    //estoy recibiendo parametros por url
    console.log(location.search);
}else{
    console.log("no recibo nada");
}

var url =  new URL(location.href);


for(let k of url.searchParams.get(k)){

}

}