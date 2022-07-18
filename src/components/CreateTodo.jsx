import React from 'react'
import '../Style/CreateTodo.css'

function CreateTodo({addTodo, forwardRef}) {
  const [textValue, setTextValue] = React.useState('')

  function saveValue (event){
    setTextValue(event.target.value)
  }

  function createNewTodo(event){
    event.preventDefault();
    addTodo(textValue)
    setTextValue('')
  }

  return (
    <section className='CreateTodo'>
      <form className='TodoForm' onSubmit={createNewTodo}>
        <label className='createTodoLabel'>Crea una tarea</label>
        <textarea 
          value={textValue} 
          placeholder='Escribe una Tarea' 
          className='inputField' 
          onChange={saveValue}
          ref={forwardRef}
        ></textarea>
        <button className='createButton' type='submit'>Crear</button>
      </form>
    </section>
  )
}

export default CreateTodo