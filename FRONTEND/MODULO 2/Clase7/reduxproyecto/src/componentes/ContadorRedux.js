import React from 'react'
import { increment, decrement } from '../store/Accion'
import { useSelector, useDispatch } from 'react-redux'

const ContadorRedux = () => {
const contador = useSelector(state => state)
const dispatch = useDispatch();

return (
    <div>
      <h1> Contador Redux 🌓</h1>
      <p> Contador {contador} </p>
      <button onClick={() => dispatch(increment())}> Incrementar </button>
      <button onClick={() => dispatch(decrement())}> Decrementar </button>
    </div>
  )
}

export default ContadorRedux
