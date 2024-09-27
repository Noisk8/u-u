//text content

const titulo = document.querySelector("h1")
console.log(titulo.textContent)
titulo.textContent = ("Nea peguelo")
console.log()

//innetHTML

const titulo2 = document.querySelector("h1")
titulo2.innerHTML = ("Neaaaa")


const titulo3 = document.querySelector

// set atributos para cambiar atributos 
const imagen = document.querySelector(".imagen")
imagen.setAttribute("alt", "solo bareta")


// cambiar el estilo de un elemento 

const boton = document.querySelector(".btn")
boton.style.backgroundColor  ="red";

//

const contenido = document.querySelector(".content");
const nuevoElemento = document.createElement("p");
nuevoElemento.textContent = "Vamos por el mogra";
contenido.appendChild(nuevoElemento);

const parrafoAntes = document.createElement("P");
parrafoAntes.textContent = "papi y una pola también"
contenido.insertBefore(parrafoAntes, imagen);

// remover un elemento del DOM 
// imagen.remove();