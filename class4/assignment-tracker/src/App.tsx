import { Header } from "./components/Header";
import Assignments from "./components/Assignments";
import { ChangeEvent, useState, useEffect } from "react";

export type TTask = {
  taskId: number;
  taskName: string;
  taskDeadline: any;
  taskStatus: boolean;
}

export const App = () => {
  const [task, setTask] = useState<string>('');
  const [taskList, setTaskList] = useState<TTask[]>([]);
  const [completedTaskCount, setCompletedTaskCount] = useState<number>(0);
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [defaultValue, setDefaultValue] = useState('Set Date');

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTask(e.target.value);
  }
  
  const addItem = (e: ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    const newTask = {
      taskId: taskList.length + 1,
      taskName: task,
      taskDeadline: defaultValue,
      taskStatus: false,
    }
    if (newTask.taskName === "") return
    setTaskList([...taskList, newTask]);
    setTask('')
    setDefaultValue('Set Date')
  }

  const deleteItem = (taskIdTodelete: number): void => {
    setTaskList(taskList.filter((task) => {
      return task.taskId != taskIdTodelete
    }))
  };

  useEffect(() => { 
    setCompletedTaskCount(taskList.filter(task => task.taskStatus).length) 
  });

  const completeItem = (taskIdTodelete: number): void => {
    setTaskList(
      taskList.map((task) => task.taskId === taskIdTodelete ? {...task, taskStatus: !task.taskStatus} : task)
    );
    
      taskList.map((task) => task.taskStatus ? setCompletedTaskCount(completedTaskCount + 1) : setCompletedTaskCount(completedTaskCount)
    );
      
  }

  return (
    <>
      <Header 
        task = {task}
        startDate = {startDate}
        setStartDate = {setStartDate}
        handleChange = {handleChange}
        addItem = {addItem}
        defaultValue = {defaultValue}
        setDefaultValue = {setDefaultValue}
        />

      <Assignments 
        taskList = {taskList} 
        deleteItem = {deleteItem}
        completeItem = {completeItem}
        completedTaskCount = {completedTaskCount}/>
    </>
  );
}




