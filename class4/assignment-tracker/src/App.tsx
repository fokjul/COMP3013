import { Header } from "./components/Header";
import Assignments from "./components/Assignments";
import { ChangeEvent, useState } from "react";

export type TTask = {
  taskId: number;
  taskName: string;
  taskStatus: boolean;
}

export const App = () => {
  const [task, setTask] = useState<string>('');
  const [taskList, setTaskList] = useState<TTask[]>([]);
  const [completedTaskCount, setCompletedTaskCount] = useState<number>(0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTask(e.target.value);
  }
  
  const addItem = (e: ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    const newTask = {
      taskId: taskList.length + 1,
      taskName: task,
      taskStatus: false,
    }
    if (newTask.taskName === "") return
    setTaskList([...taskList, newTask]);
    setTask('')
  }

  const deleteItem = (taskIdTodelete: number): void => {
    setTaskList(taskList.filter((task) => {
      return task.taskId != taskIdTodelete
    }))
  };

  const completeItem = (taskIdTodelete: number): void => {
    setTaskList(
      taskList.map((task) => task.taskId === taskIdTodelete ? {...task, taskStatus: !task.taskStatus} : task)
    );

    taskList.map((task) => task.taskStatus === true ? setCompletedTaskCount(completedTaskCount - 1) : setCompletedTaskCount(completedTaskCount + 1));
  };

  return (
    <>
      <Header 
        task = {task}
        handleChange = {handleChange}
        addItem = {addItem}/>

      <Assignments 
        taskList = {taskList} 
        deleteItem = {deleteItem}
        completeItem = {completeItem}
        completedTaskCount = {completedTaskCount}/>
    </>
  );
}




