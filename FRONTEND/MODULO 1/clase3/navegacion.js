// acceder al nodo padre 

const formulario = document.querySelector("#tarea-form");
const padreFormulario = formulario.parentElement;
console.log(padreFormulario)

// childnodes
//retorna los nodos  texto, espacios en blanco entre otros elementos 
const hijosContent = padreFormulario.childNodes;
console.log(hijosContent)


const hijos2 = padreFormulario.children;


const tareasLista = document.querySelector("ul");
const primeraTarea = tareasLista.firstChild;
const ultimaTarea = tareasLista.lastChild;
const nuevoElemento = document.createElement("p")
nuevoElemento.textContent


// fist Element Child

const primeraTarea2 = tareasLista.firstElementChild
console.log(primeraTarea2)
primeraTarea2.style.background= "red";




const siguienteTarea = primeraTarea2.nextElementSibling
siguienteTarea.style.background = "green"

// const ultimaTarea2 = primeraTarea2.lastElementChild;

// ultimaTarea2.style.background = "yellow"



const tareas = tareasLista.children;
for(let i = 0; i < tareas.length; i++){
    tareas[i].style.background = "red"
}


