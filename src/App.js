import { useState } from "react";
import Tasks from "./Tasks";
import TaskList from "./TaskList";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      checked: false,
      task:'Sleep'
    }
  ]);
  const [newTask, setNewTask] = useState('');

  const addTask = (task) => {
const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
const myNewTask = {id, checked: false, task};
const listTask = [...tasks, myNewTask];
setTasks (listTask);
  }

  const handleSubmit = (e) =>{
e.preventDefault();
if (!newTask) return;
addTask(newTask);
setNewTask('')}

const handleCheck = (id) => {
  const listTask = tasks.map ((task) => task.id === id ? {...task, checked: !task.checked} : task);
  setTasks(listTask);
}
  
const handleDelete = (id) => {
  const listTask = tasks.filter((task) => task.id !== id);
  setTasks(listTask);
}
  return (
    <div className="App">
<Tasks
tasks={tasks}
newTask={newTask}
setNewTask={setNewTask}
handleSubmit={handleSubmit}
/>
<TaskList
tasks={tasks}
handleCheck={handleCheck}
handleDelete={handleDelete}
/>
    </div>
  );
}

export default App;

