console.log("prueba")

const contenedor =  $("#container");

const padre = contenedor.children();
const lista =padre.children();
const hijos = lista.children();
console.log(hijos)


//navegacion tipo padre 

const elementoPadre = lista.parent()

console.log(elementoPadre)


//hermanos 

const hermanos = $("#li3").siblings()
console.log(hermanos)

const hermanos2 = $("#lista").siblings()
console.log(hermanos2)


const siguiente = $("#li1").next()
console.log(siguiente)



const anterior = $("#li4").prev()
console.log(anterior)


//navegacion elementos por css

const lis =$("#lista li")
lis.css("color", "red")
console.log(lis)