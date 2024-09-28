// const botonAgregar = document.getElementById('agregar');

// botonAgregar.addEventListener('click', () => {

//     // console.log("presiona");
    
// })

// Capa de  captura y burbuja 

// const formulario = document.querySelector('.tarea-form');

// formulario.addEventListener('submit', (evento)=>{ 

//     evento.preventDefault();
//     console.log('formulario enviado')

// })



// const botonesEliminar = document.querySelectorAll('.eliminar-btn');
// botonesEliminar.forEach((boton) =>{
//     boton.addEventListener('click',(evento) =>{
//         const boton = evento.target;
//         const tarea = boton.parentElement;
//         tarea.remove()

//     });
// })


// crear una tarea 

const tareasListas = document.querySelector("ul");
const primeraTarea = tareasListas.firstElementChild;
const ultimaTarea =tareasListas.lastElementChild;
console.log(primeraTarea);

//cambiar el color del background

primeraTarea.style.background ="red"
ultimaTarea.style.background ="green"

const siguienteTarea = primeraTarea.nextElementSibling;
siguienteTarea.style.background ="blue"

const penUltimaTarea = siguienteTarea.nextElementSibling;
penUltimaTarea.style.background ="blue"

// Cambiar el color de fondo de todos lo elementos de tareasListas
const tareas = tareasListas.children;
for (let i = 0; i < tareas.length; i++){
    tareas[i].style.background ="white"
}