import React, { useState } from 'react';

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
    <div className="calculadora">
      <div className="display">{pantalla}</div>
      <div className="buttons">  

        {/* Botones numéricos y operadores */}
        <button onClick={() => agregar('1')}>1</button>
        <button onClick={() => agregar('2')}>2</button>
        <button onClick={() => agregar('3')}>3</button>
        <button onClick={() => agregar('4')}>4</button>
        <button onClick={() => agregar('5')}>5</button>
        <button onClick={() => agregar('6')}>6</button>
        <button onClick={() => agregar('7')}>7</button>
        <button onClick={() => agregar('8')}>8</button>
     
        <button onClick={() => agregar('.')}>.</button>
        <button onClick={() => agregar('+')}>+</button>
        <button onClick={() => agregar('-')}>-</button>
        <button onClick={() => agregar('*')}>x</button>
        <button onClick={() => agregar('/')}>%</button>

        <button onClick={() => borrar ('C')}> </button>
        {/* ... otros botones */}
        <button onClick={calcular}>=</button>
      </div>
    </div>
  );
}

export default Calculadora;