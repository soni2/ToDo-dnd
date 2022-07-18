import React from 'react'
import '../Style/TodoSearch.css'
import { useTodos } from './context/useTodos'

function TodoSearch({}) {

    const {setSearchValue} = useTodos();


    const onChanging =(event) =>{
        setSearchValue(event.target.value)
      }
    

    return (
        <input 
        placeholder='Buscar tarea' 
        className='todoInput' 
        id="searchTodo" 
        onChange={onChanging}
        />
    )
}

export default TodoSearch