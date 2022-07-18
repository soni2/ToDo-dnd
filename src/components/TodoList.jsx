import React from 'react'
import '../Style/TodoList.css'

function TodoList({children}) {
  return (
    <section className='TodoList'>
        <ul>
            {children}
        </ul>
    </section>
  )
}

export default TodoList