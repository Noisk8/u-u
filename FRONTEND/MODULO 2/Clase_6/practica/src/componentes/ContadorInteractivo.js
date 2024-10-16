import React, {useState } from 'react'

const ContadorInteractivo = () => {
    const [contador,setContador] =useState(0);

  return (
    <div>
      <h1>contador</h1>
      <p>el contador es: {contador}</p>
      <button onClick={() => setContador(contador +1 )}>Incrementar</button>
      <button onClick={() => setContador(contador - 1 )}>Decrementar</button>
    </div>
  )
}

export default ContadorInteractivo
