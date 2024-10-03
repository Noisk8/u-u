// evento de escucha en caso de tener  el archivo js en la parte superior del html 
document.addEventListener("DOMContentLoaded", function(){
    const h1= document.querySelector('h1');

    console.log(h1)

});

// Fase de Burbujeo 

const boton = document.querySelector('#boton');
boton.addEventListener('click', function (){

    console.log("botn")
})


const container = document.querySelector('#container');
boton.addEventListener('click', function (){

    console.log("container")
})



const padre = document.querySelector('#padre');
boton.addEventListener('click', function (){

    console.log("padre")
})


const hijo = document.querySelector('#hijo');
boton.addEventListener('click', function (){

    console.log("padre")
})


// Fase de Captura 


boton.addEventListener('click', function(){

    console.log("click en cpatura")
}, true)

hijo.addEventListener('click', function(){

    console.log("click en cpatura")
}, true)

container.addEventListener('click', function(){

    console.log("click en cpatura")
}, true)

padre.addEventListener('click', function(){

    console.log("click en cpatura")
}, true)