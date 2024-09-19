// console.log("Vamos en clase")


// function sumar(){

//     console.log("dentro de la función");

// }

// sumar();

// // Parametros y argumentos 

// function sumar2(a,b){

//     console.log( a + b)

// }

// sumar2(2,3)


// function sumar3 (a,b ){
//      return a + b 
// }

// let resultado = sumar3(5,6);

// console.log(resultado)




// function multipilcar(c,d){

//     return c * d 
// }

// let respuesta = multipilcar (3,6);

// console.log(respuesta)



// Funcion tipo felcha  (arrow function)

// let sumx = (r,t) => r+t;

// function saludar(){
//     return "Hola";
// }

// const saludar2 =() => "Hola";

// let saludini =  saludar();

// console.log(saludini);

// console.log(saludar2());



// const calcularArea = (largo, ancho) => {
//     return largo * ancho;
// }

// console.log("El area del rectangulo es:" + calcularArea(5,10));

// // Parametros predeterminados 

// function multiply(num1 =2, num2 =3){
//     return num1 *num2
// }

// let resultido = multiply()




// function saludar5(nombre = "HOla invitado", edad ){
// console.log(nombre);

// }

// saludar5 ("Juan");
// saludar5 ();


// //  Parametros tipo Rest 

// function  sumarNOtas(n1, n2, n3){

//     return n1 + n2 + n3;

// }

// console.log(sumarNOtas(5,6,7));



// function  sumarNotas(...notas){

//     let sumar = 0;

//     for(let i = 0; i < notas.length; i++){

//         sumar = sumar  + notas[i] // sumar += notas[i]
//     }
// return sumar;
// }

// console.log(sumarNotas(5,6,7,5));


// function sumarPruebas(...pruebas){
//     // en multiplicacion se ocupa 1 porque  0 se multiplica por 0 
//     let multiplicar1 = 1;
//     for(let i = 0; i < pruebas.length; i++){
//         multiplicar1 = multiplicar1 * pruebas[i]
//     }
//     return multiplicar1;
// }

// console.log(sumarPruebas(10,5,6))

// Ambitos de variables 


// let mensaje1 = "Hola Invitado"
// function miFuncion(){

//     let mensaje2 = "Hola Carlos ";
// }

// console.log(mensaje)
// console.log(miFuncion())


// Closure 
//Nos permite recordar el entorno donde se creo laa funcion 


function saludarDesde(nombre) {
    let mensaje = "Hola, " + nombre;
    return function () {
        console.log(mensaje)
    }
}

const saludarCralos = saludarDesde("Carlos");
saludarCralos();


function crearContador() {

    let contador = 0;
    return function () {
        contador = contador + 1;

        return contador;

    };
}

const contador1 = crearContador();
console.log(contador1())


function crearMultiplicador(){
    let multiplicador = 1;
    return function(){
        multiplicador = multiplicador * 2;
        return multiplicador; 
    }
}

const multiplicador2 = crearMultiplicador();
console.log(multiplicador2())
console.log(multiplicador2())
console.log(multiplicador2())
console.log(multiplicador2())