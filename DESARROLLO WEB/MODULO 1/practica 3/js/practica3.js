var foco= document.getElementById("foco");

var boton = document.getElementById("boton");


var bandera = false;

boton.addEventListener('click', ()=>{

    if(bandera){
        foco.style.backgroundColor = "green";
        bandera = false;
    } else{
        foco.style.backgroundColor= "yellow";
        bandera= true
    }
})