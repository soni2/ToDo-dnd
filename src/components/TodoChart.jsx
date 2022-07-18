import React from 'react'
import '../Style/TodoCharts.css'
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
ChartJS.register(ArcElement, Tooltip, Legend);




function TodoChart({completedTodos,stillTodos}) {
  
  const data = {
    labels:['Completadas', 'Sin completar'],
    datasets: [{
      label: "Tareas",
      data: [completedTodos.length, stillTodos.length],
      backgroundColor: [
        'rgba(20, 154, 156, 1)',
        'rgba(56,56,56,0.2)',
      ],
      borderWidth: 0,
    }],
  }

  return (
    <section className='TodoCharts'>
      <Doughnut
      data={data}
      width={100}
      height={100}
      options={{ maintainAspectRatio: false }}


      />
    </section>
  )
}

export default TodoChart