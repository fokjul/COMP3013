import { Assignment } from "../Assignment";
import { TTask } from "../../App";
import styles from "./assignments.module.css";

type Props = {
  taskList: TTask[];
  deleteItem(taskIdTodelete: number): void;
  completeItem(taskIdTodelete: number): void;
  completedTaskCount: number;
  defaultValue?: any;
}

export default function Assignments({taskList, deleteItem, completeItem, completedTaskCount, defaultValue}: Props) {

  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{taskList.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span> {completedTaskCount} of {taskList.length}</span>
        </div>
      </header>

      <Assignment 
      taskList = {taskList} 
      deleteItem = {deleteItem}
      completeItem = {completeItem}
      defaultValue = {defaultValue}/>
     
    </section>
  );
}


