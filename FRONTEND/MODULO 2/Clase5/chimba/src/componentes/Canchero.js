import React, { useState } from 'react'



const Canchero = () => {

  const [contador, setContador] = useState(0);
const [incremento, setIncremento] = useState(1);

  return (
    <div>
      <h1>Contador</h1>
<p> el contador es: {contador}</p>
<input type='number' value={contador} onChange={(e) => setIncremento(e.target.value)}/>
<button onClick={() => setContador(contador + incremento )}>Incrementar</button>
<button onClick={() => setContador(contador - incremento )}>Decrementar</button>
    </div>
  )
}

export default Canchero
