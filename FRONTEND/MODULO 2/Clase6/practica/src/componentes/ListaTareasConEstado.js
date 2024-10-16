import React from 'react'

const ListaTareasConEstado = () => {

    const [tareas, setTareas] = React.useState([]);
    const [texto, setTexto] =React.useState('');



    const agregarTarea = () =>{
        setTareas([...tareas,{id: Date.now(), texto, completada: false}]);



    }
    const cambiarEstado = (id) => () =>{
        setTareas(tareas.map( tarea => {

            if(tarea.id ===id){
                return {...tarea, completada: !tarea.completada}
            }
            return tarea;
        }))

    }

    const eliminarTarea = (id) => {
        setTareas(tareas.map)


    }
  return (
    <div className='contenedor'>
      <h1>Listado De tareas</h1>

      <input type='text' value={texto} onChange={ (e) => setTexto(e.target.value)} placeholder='Nueva tarea' />
    
    <button onClick={agregarTarea}>Agregar Tarea </button>

    <ul>

{

    tareas.map(

        tarea =>(
            <li key={tarea.id}>
                <input type="checkbox" checked={tarea.completada} onChange={ cambiarEstado(tarea.id) }></input>
            {tarea.texto}
            <button onClick={() => eliminarTarea(tarea.id)}>Eliminar Tarea</button>
            </li>
        )
    )
}

    </ul>
    
    </div>
  )
}

export default ListaTareasConEstado
