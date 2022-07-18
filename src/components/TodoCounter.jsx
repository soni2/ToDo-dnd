import React from 'react'
import '../Style/TodoCounter.css'

function TodoCounter({todos, completed}) {
    let todoVerify;

    if (!!todos){
        todoVerify = <h1 className='todoCounter'>
                        Haz completado <span style={{fontWeight: "bold", color: "var(--light-blue)"}}>{completed}</span> de <span style={{fontWeight: "bold", color: "var(--light-blue)"}}>{todos}</span> tareas
                    </h1>
    } else {
        todoVerify = <h1 className='todoCounter'>
         No tienes tareas por hacer, <span style={{fontWeight: "bold", color: "var(--light-blue)"}}>crea tu primera tarea</span>
        </h1>
    }
  return (
    <div>
        {todoVerify}
    </div>
  )
}

export default TodoCounter