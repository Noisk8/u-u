console.log(document)

//Accesos  y selección de elementos 

const entradaTexto = document.getElementById("tarea-input");


// llamar elemento por clase
const tareas = document.getElementsByClassName("tarea-lista")

// query selector 

// . para clases
const entrada2 = document.querySelector(".tarea-lista")
console.log(entrada2)

// # para id
const entrada3 = document.querySelector("#tarea-input")
console.log(entrada3)

// query all

const entradas = document.querySelectorAll(".tarea-lista")

//query para etiquetas
const elementos = document.querySelector("h1")