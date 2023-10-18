import { useState } from "react";

function Planets () {
const [newTask, setNewTask] = useState("");
const [taskList, setTaskList] = useState([]);

function getTask(event) {
    setNewTask(event.target.value);
}

function addTask() {
    const task = {
        id: taskList.length === 0 ? 1 : taskList[taskList.length - 1].id + 1,
        name: newTask,
        completed: false,
    } 
    setTaskList([...taskList, task])
}

function completeTask(id) {
    setTaskList(
        taskList.map((task) => {
            if (task.id === id) {
                return {...task, completed: true } 
            } else {
                return task
            }
        })
    ) 
    
}

function deleteTask(id) {
    const newTaskList = taskList.filter((task) => task.id !== id);
    setTaskList(newTaskList);
}

return (
    <div>
        <div className="addTask">
            <input type="text" onChange={getTask}/>        
            <button onClick={addTask}>Add Task</button>
        </div>
        <div className="taskList">
            <ul>
                {taskList.map((task)=> {
                    return (
                        <div>
                            <li style={{color: task.completed ? "green" : "black"}}>{task.name}</li> 
                            <button onClick={() => completeTask(task.id)}>Complete</button>
                            <button onClick={() => deleteTask(task.id)}>X</button>        
                        </div>      
                    )
                })}
            </ul>
            
        </div>
    </div>
    
);
}

export default Planets;