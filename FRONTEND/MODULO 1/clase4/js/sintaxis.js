const h1 = document.querySelector('h1')

console.log(h1)

//seleccionar elementos pero con jquery

const h1Jquery =$ ('h1')

console.log(h1Jquery)


const boton =$('#boton').click()
console.log(boton)

$("#boton").click(function(){
console.log("click con queryy")
$("#boton").hide(1500);

})



const titulos = $(".titulo");

console.log(titulos)