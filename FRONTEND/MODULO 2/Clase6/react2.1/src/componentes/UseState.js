import React from 'react'
import { useState } from 'react'

const UseState = ( props ) => {
  const [count, setCount] = useState(0);
  return (
    <div>

      <p>Haz Click{count}</p>
      <button onClick={ ()=> setCount (count+1) }  > Click Aquí</button>
    Nombrer {props.nombre}
   
    </div>
  )
}

export default UseState;
