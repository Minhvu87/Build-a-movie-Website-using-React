import { useState } from "react"
import './todo-app.css'

export default function App(){
    return(
        <div className='App'>
            <TodoList />
        </div>

    )
}
function TodoList(){
    const [tasks, setTasks] = useState([])
    const [todoItem, setTodoItem] = useState('')

    const addTask = () =>{
        setTasks([
            ...tasks,
            {
                id: tasks.length + 1,
                task: todoItem,
                completed: false 
            }
        ])
        setTodoItem('')
    }
    const removeTask = (id) =>{
        setTasks(tasks.filter(tasks => tasks.id !== id))
    }

    const updateTasksStatus = (passedTask) =>{
        setTasks(tasks.map((task) => {
            if(task.id === passedTask.id){
                task.completed = !task.complete
                return task
            }
            return task
        }))
    }
    return(
        <div className='todo-list'>
            <h1>Todo List</h1>
            <input onChange={(e) =>setTodoItem(e.target.value)} value={todoItem}/>
            <button className = 'add-button' onClick={addTask}>Ask task</button>
            {tasks.map(task => (
                <TodoItem 
                task={task}
                removeTask={removeTask}
                updateTasksStatus={updateTasksStatus}
                />
            ))}
        </div>
    )
}
function TodoItem({ task, removeTask, updateTasksStatus }) {
    return (
        <div className={`todo-item ${task.completed ? `completed`:''}`} >
            <span>{task.task}</span>
            <div>
                <input 
                    type='checkbox'
                    onChange={() => updateTasksStatus(task) }
                    checked={task.completed} 
                />
                <button className='remove-button' onClick={() => removeTask(task.id)}>Delete Task</button>    
            </div>
        </div>
    );
}
