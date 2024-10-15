const botonAgregar = document.getElementById('agregar');
botonAgregar.addEventListener('click', (evento) =>{
evento.preventDefault();
const input = document.getElementById('tarea-input');
console.log(input.value)
const tarea  = document.createElement('li');
tarea.innerText = input.value;
tarea.classList.add('tarea');
console.log(tarea)
const botonEliminar = document.createElement('button');
botonEliminar.innerText = 'Eliminar';
botonEliminar.classList.add('eliminar-btn');
botonEliminar.addEventListener('click', (evento)=>{
const boton = evento.target;
const tarea2 = boton.parentElement;
tarea2.remove()
})
tarea.appendChild(botonEliminar);

const contenedorTareas = document.getElementById('tareas-lista'); // Asegúrate de que este ID exista en tu HTML
contenedorTareas.appendChild(tarea);


    console.log('Click en boton agregar ')
});



const formulario = document.getElementById('tarea-form');
formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();    

})

//Eliminar Tareas


const botonesEliminar = document.querySelectorAll('.eliminar-btn')
botonesEliminar.forEach((boton) => {

boton.addEventListener('click', (evento) =>{

    const boton = evento.target;
    const tarea = boton.parentElement;
    tarea.remove(   )
    console.log('boton elminar')
})


})