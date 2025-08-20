import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const TaskList = ({tasks, handleCheck, handleDelete}) => {
  return (
    <ul>
      {tasks.map ((task) => (<li key={task.id} className= 'task'>
        <input
        type="checkbox"
                        onChange= {() => handleCheck(task.id)}
                        checked={task.checked} />
                        <label>{task.task}</label>
                        <FontAwesomeIcon icon={faTrash} 
                        onClick={ ()=> handleDelete(task.id)}
                        role='button'
                        tabIndex="0"
                        aria-label={`Delete ${task.task}`}
                        />
      </li>))
}
    </ul>
  )
}

export default TaskList
