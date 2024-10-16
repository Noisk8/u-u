import React, {useState} from 'react'

const ContadorAvanzado = () => {

    const [contador,setContador] = useState(0);
    const [incremento,  setIncremento] = useState(1);

  return (
    <div>
      <h1>Contador Avanzado </h1>
      <p>el contador es: {contador}</p>
      <input type="number" value={incremento} onChange={(e) => setIncremento(e.target.value)}></input>
      <button onClick={() => setContador(contador + incremento )}>Incrementar</button>
      <button onClick={() => setContador(contador - incremento )}>Decrementar</button>
    
    </div>
  )
}

export default ContadorAvanzado
