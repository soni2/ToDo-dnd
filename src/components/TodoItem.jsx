import React from 'react'
import '../Style/TodoItem.css'
import {useSortable} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

function TodoItem({text, completed, onDelete, onComplete, id}) {

  const {
    setNodeRef,
    attributes,
    listeners,
    transition,
    transform
  } = useSortable({id:id})

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),

  }

  return (
    <li 
    className={`itemContainer ${completed && 'titulo--active'}`}
    ref={setNodeRef}
    {...attributes}
    {...listeners}
    style={style}
    >
        <p className='todoText'>{text}</p>
        <span onClick={onComplete} className={`icon completeTodo ${completed && 'todo--complete'}`}/>
        <span onClick={onDelete} className='icon deleteTodo'/>
    </li>
  )
}

export { TodoItem }