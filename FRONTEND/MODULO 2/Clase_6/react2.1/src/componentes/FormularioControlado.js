import React, { useEffect, useState } from 'react'

const FormularioControlado = () => {

const [nombre, setNombre] = useState('');
const manejarCambio = (evento) => {

    setNombre(evento.target.value);
   
}

const manejarEnvio= (evento)=>{
    evento.preventDefault();
    console.log('Formulario enviado')
    console.log(`nombre: ${nombre}`)
}

useEffect(() =>{
    console.log('')
},[nombre]
)

  return (
    <div>
<form onSubmit={manejarEnvio}>
<label> 
    Nombre:
  
    <input 
    
   type='text'
    
    value={nombre}
    // para no controlado
    // ref ={nombreRef}
    // para no controlado se quita el onchange 
    onChange={manejarCambio}
    />
  </label>
<button type="submit">Enviar</button>

</form>

      
    </div>
  )
}

export default FormularioControlado
