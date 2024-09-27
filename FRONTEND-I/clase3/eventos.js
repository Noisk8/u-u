const botonAgregar = document.getElementById('agregar');

botonAgregar.addEventListener('click', () => {

    console.log("presiona");
    
})

// Capa de  captura y burbuja 

const formulario = document.getElementById('tarea-from');

formulario.addEventListener('submit', (evento)=>{

    evento.preventDefault();
    console.log('formulario enviado')

})



const botonesEliminar = document.querySelectorAll('.eliminar-btn');
botonesEliminar.forEach((boton) =>{
    boton.addEventListener('click',(evento) =>{
        const boton = evento.target;
        const tarea = boton.parentElement;
        tarea.remove()

    });
})


// crear una tarea 