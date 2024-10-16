import React from 'react'

const Eventos = () => {

    const [texto, setTexto] =React.useState('');

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
            onChange={(e) => setTexto(e.target.value)}
            
            />
        </label>
      </div>

      {/* <button onClick={manejarClick}>Click Aquí</button> */}
    </div>
  )
}

export default Eventos
