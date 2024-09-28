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
tarea.appendChild(botonEliminar )



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
    const tarea =boton.parentElement;
    tarea.remove(   )
    console.log('boton elminar  ')
})


})