
import React, {useRef} from 'react'

const EventosUseRef = () => {
 

    const [texto, setTexto] =React.useState('');
const inputRef =useRef(null);
    const manejarCambio = (e)=>{
        setTexto(e.target.value)
    }


// const manejarClick = () =>{
//     const manejarClick = () =>{
//         alert('Que chimba aprender')
//     }
// }
  return (
    <div>
      Eventos
      <div>
        <label>
            Escribe algo
            <input type="text" value={texto}
            ref={inputRef}
            onChange={(e) => setTexto(e.target.value)}
            
            />
        </label>
      </div>

      {/* <button onClick={manejarClick}>Click Aquí</button> */}
    </div>
  )
}


export default EventosUseRef
