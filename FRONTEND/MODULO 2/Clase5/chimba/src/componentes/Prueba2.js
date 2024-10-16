import React, { useState } from "react";
import "./Prueba2.css";

import PropTypes from "prop-types";
import Prueba from "./Prueba";

export default function Prueba2({ nombre, datos = {}  }) {
  // nombre1 es la variable que se recibe como prop
  //set setNombre es la función que se encarga de cambiar el valor de nombre
  // Use state para asignar el valor por defecto
  const [textoInput, setNombre] = useState('');
  const manejarCambio = (e) => {
    setNombre(e.target.value);
  };

  return (
    <div className='contenedor'>
      <h1>
        Hola {nombre} {datos.apellido}
      </h1>
      <p>Tiene {datos.edad ? datos.edad : "No igreso el dato"} Años de Edad</p>
      <input
        type='text'
        value={textoInput}
        placeholder='Escribe algo'
        onChange={manejarCambio}
      />
       <button>Add</button>
      <p>{textoInput}</p>

     
    </div>
  );
}


Prueba2.propTypes = {
  nombre: PropTypes.string.isRequired,
  datos: PropTypes.object.isRequired,
};

Prueba2.defaultProps = {
  nombre: 'Invitado',
  datos: {},
};