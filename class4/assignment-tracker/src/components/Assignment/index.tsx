import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { TTask } from "../../App";
import { BsCheckCircleFill } from "react-icons/bs";

type Props = {
  taskList: TTask[];
  deleteItem(taskIdTodelete: number): void;
  completeItem(taskIdTodelete: number): void;
}

export function Assignment({taskList, deleteItem, completeItem}: Props) {

  return (
    <div className={styles.list}>
        {taskList.map((task: TTask) =>(
          <div className={styles.assignment}>

            <button className={styles.checkContainer} onClick = {() => completeItem(task.taskId)}> {task.taskStatus ? <BsCheckCircleFill size={20}/> : <div />}
            </button>

            <p className={task.taskStatus ? styles.textCompleted : <p />}>{task.taskName}</p>

            <button className={styles.deleteButton} onClick = {() => deleteItem(task.taskId)}>
              <TbTrash size={20} />
            </button>

          </div>
          
        ))}
       </div> 
  );
}



