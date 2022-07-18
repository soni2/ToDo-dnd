import React,{useRef} from 'react'
import './App.css'
import CreateTodo from './components/CreateTodo'
import TodoChart from './components/TodoChart'
import TodoList from './components/TodoList'
import { TodoItem } from './components/TodoItem'
import { useTodos } from './components/context/useTodos'
import { DndContext, closestCenter } from '@dnd-kit/core'
import { SortableContext,verticalListSortingStrategy } from '@dnd-kit/sortable'
import TodoCounter from './components/TodoCounter'


function App() {

  const {
    loading,
    todos,
    deleteTodo,
    completeTodo,
    addTodo,
    sensors,
    handleDragEnd,
  } = useTodos()
  
  const completedTodos = todos.filter(todo=>todo.completed === true)
  const stillTodos = todos.filter(todo=>todo.completed === false)

    return (
    <React.Fragment>
      <div className='todoFragment'>
          <CreateTodo
          addTodo={addTodo}
          />
          <TodoChart
          completedTodos={completedTodos}
          stillTodos={stillTodos}
          />
        <TodoList>
          <TodoCounter 
          todos = {todos.length}
          completed = {completedTodos.length}
          />
          {loading && <p>Las tareas estan cargando</p>}
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
            items={todos.map(item=>item.id)}
            strategy={verticalListSortingStrategy}

            >
              {todos.map(todo=>
              <TodoItem
              key = {todo.id}
              {...todo}
              onDelete = {()=>deleteTodo(todo.id)}
              onComplete = {()=>completeTodo(todo.id)}
              />
              )}

            </SortableContext>
          </DndContext>
        </TodoList>
      </div>
    </React.Fragment>
    )
}

export default App 