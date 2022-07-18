import { useLocalStorage } from './useLocalStorage'
import {PointerSensor, useSensor } from '@dnd-kit/core'
import {arrayMove } from '@dnd-kit/sortable'
import React from 'react'


function useTodos(props) {
  const {
    items: todos, 
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TODO_V1', [])

  //Para agregar tareas

    function addTodo(text){
       const allTodos = [...todos]
        const date = Date.now();

       allTodos.push({
        text, 
        id: date.toString(),
        completed: false,
      })

       saveTodos(allTodos)
    }

  //Para eliminar tareas

    function deleteTodo(text){
      const todoIndex = todos.findIndex(todo => todo.id === text)
      const allTodos = [...todos];

      allTodos.splice(
        todoIndex,1
      )
      saveTodos(allTodos)
    }
  //Para marcar por completo las tareas

    function completeTodo(text){
      const todoIndex = todos.findIndex(todo => todo.id === text)
      const allTodos = [...todos];

      allTodos[todoIndex].completed = !allTodos[todoIndex].completed ;

      saveTodos(allTodos)
    }

    //Movimiento de todos
    const sensors = [useSensor(PointerSensor,
      {activationConstraint: {
        delay: 250
      }})]
    
    const handleDragEnd =({active,over})=>{
      if (active.id !== over.id){
        saveTodos((todo)=>{
          const oldIndex = todo.findIndex(item => item.id === active.id)
          const newIndex = todo.findIndex(item => item.id === over.id)

          return arrayMove(todo, oldIndex, newIndex)
        }
        )
      }
    }
        
  return {error,
        loading,
        addTodo,
        todos,
        deleteTodo,
        completeTodo,
        sensors,
        handleDragEnd,
        }

  
}

export { useTodos }