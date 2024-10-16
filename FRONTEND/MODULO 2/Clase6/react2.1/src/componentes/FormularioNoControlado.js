import React, {useRef, useEffect} from 'react'

const FormularioNoControlado = () => {


    const nombreRef = useRef();


    const manejarCambio = (evento) => {
      console.log("")
    }
    
    const manejarEnvio= (evento)=>{
        evento.preventDefault();
        console.log('Formulario enviado')
        console.log(`nombre: ${nombreRef.current.value}`)
    }


    useEffect(() =>{

        console.log()
    }, [nombreRef])
    
      return (
        <div>
    <form onSubmit={manejarEnvio}>
    <label> 
        Nombre:
        <input 
        ref ={nombreRef}
        type="text"
        value={nombre}
        
        />
    </label>
    <button type="submint">Enviar</button>
    
    </form>
    
          
        </div>
      )
    }


export default FormularioNoControlado
