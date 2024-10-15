console.log("HOla mundo")

var nombre = "juan";
let edad = 32
const nacionalidad = "Colombiana"


console.log(nacionalidad)



var num1 = 3;

var num2 = 2;

console.log("suma", num1 + num2)

if (num1 > num2) {

    console.log(num1, "es mayor que", num2)
} else {
    console.log("es menor que", num2)
}

// Sentencias de control 


var nota = 85

if (nota >= 70) {
    console.log("el estudiante es regular ")
} else if (nota <= 60) {

    console.log("el estudiante esta paila")
}


var dia = 4

switch (dia) {
    case 1:
        console.log("paila")
        break;

    case 2:
        console.log("paila")
        break;
    case 3:
        console.log("paila")
        break;
    case 4:
        console.log("melo")
        break;

}

var elemento = document.getElementById("sizas")

// eventos 

var boton = document.getElementById("btn-enviar")
boton.addEventListener('click', () =>{
    console.log("enviando");
    var nombre = document.getElementById("nombre");
        var edad =document.getElementById("edad");
    elemento.innerHTML= nombre 
})