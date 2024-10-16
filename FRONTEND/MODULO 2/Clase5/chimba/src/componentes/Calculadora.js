import React, { useState } from 'react';
import './Calculadora.css';

function Calculadora() {
  const [pantalla, setPantalla] = useState('');

  const agregar = (value) => {
    setPantalla(pantalla + value);
  };

  const  
 calcular = () => {
    try {
      const result = eval(pantalla);
      setPantalla(result);  

    } catch (error) {
      setPantalla('Error');
    }
  };

 const borrar = () => {

    setPantalla('');
 };

 
  return (
    <div className='contenedor'>
    <div className="calculadora">
      <h1>Calculadora </h1>
      <div className="pantalla">{pantalla}</div>
      <div className="botonera">
        {/* Botones numéricos */}
        <button className="boton" onClick={() => agregar('1')}>1</button>
        <button className="boton" onClick={() => agregar('2')}>2</button>
        <button className="boton" onClick={() => agregar('3')}>3</button>
        <button className="boton" onClick={() => agregar('4')}>4</button>
        <button className="boton" onClick={() => agregar('5')}>5</button>
        <button className="boton" onClick={() => agregar('6')}>6</button>
        <button className="boton" onClick={() => agregar('7')}>7</button>
        <button className="boton" onClick={() => agregar('8')}>8</button>
        <button className="boton" onClick={() => agregar('9')}>9</button>
        <button className="boton" onClick={() => agregar('0')}>0</button>
        <button className="boton" onClick={() => agregar('.')}>.</button>

        {/* Botones de operadores */}
        <button className="boton boton-operador" onClick={() => agregar('+')}>+</button>
        <button className="boton boton-operador" onClick={() => agregar('-')}>-</button>
        <button className="boton boton-operador" onClick={() => agregar('*')}>*</button>
        <button className="boton boton-operador" onClick={() => agregar('/')}>/</button>

        {/* Botón de borrar */}
        <button className="boton" onClick={borrar}>C</button>

        {/* Botón de igual */}
        <button className="boton boton-igual" onClick={calcular}>=</button>
      </div>
    </div>
    </div>
  );
}

export default Calculadora;