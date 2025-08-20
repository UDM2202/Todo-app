import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Tasks = ({newTask, setNewTask, handleSubmit}) => {
  return (
    <section>
      <form className= 'Task' onSubmit={handleSubmit}>
<label htmlFor='Tasks'></label>
<input
id='Tasks'
autoFocus
type='text'
 placeholder='Add Task'
      required 
      value={newTask}
      onChange={(e) => setNewTask(e.target.value)}
      />
      </form>
      <button 
      type='submit'
      aria-label='Add Task'>  <FontAwesomeIcon icon={faPlus} /></button>
    </section>
  )
}

export default Tasks
