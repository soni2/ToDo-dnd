import React from 'react'
import '../Style/CreateTodo.css'

function CreateTodo({addTodo, forwardRef}) {
  const [textValue, setTextValue] = React.useState('')
  const [incompleteText, setincompleteText] = React.useState(false)

  function saveValue (event){
    setTextValue(event.target.value)
  }


  function createNewTodo(event){    
    if (textValue <= 1){
      setincompleteText(true);
      event.preventDefault();

    }else{
      event.preventDefault();
      addTodo(textValue)
      setTextValue('')
      setincompleteText(false);
    }
    
  }

  return (
    <section className='CreateTodo'>
      <form className='TodoForm' onSubmit={createNewTodo}>
        <label className='createTodoLabel'>Crea una tarea</label>
        {incompleteText && <p style={{color:"red", margin:"4px 0 0"}}>No puedes enviar tareas vacias</p>}
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