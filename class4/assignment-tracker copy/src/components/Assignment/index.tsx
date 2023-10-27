import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { TTask } from "../../App";
import { BsCheckCircleFill } from "react-icons/bs";
import format from "date-fns/format";

type Props = {
  taskList: TTask[];
  deleteItem(taskIdTodelete: number): void;
  completeItem(taskIdTodelete: number): void;
}



export function Assignment({taskList, deleteItem, completeItem}: Props) {
  
  function numberOfDays(taskDeadline: any) {
    let numberOfDays
    numberOfDays = Math.floor((taskDeadline - new Date()) / (1000*60*60*24))
    return numberOfDays
  }
  
  return (
    <div className={styles.list}>
        {taskList.map((task: TTask) =>(
          
          <div className={styles.assignment}>
            <button className={styles.checkContainer} onClick = {() => completeItem(task.taskId)}> {task.taskStatus ? <BsCheckCircleFill size={20}/> : <div />}
            </button>

            <p className={task.taskStatus ? styles.textCompleted : ""}>{task.taskName}</p>

            { task.taskDeadline === 'Set Date' 
                ? <div className={styles.noDueDate}>{'No due date'} </div>
                : numberOfDays(task.taskDeadline) === -1
                ? <div className={styles.dueToday}>{'Due: today'} </div>
                : numberOfDays(task.taskDeadline) === 0 
                ? <div className={styles.dueTomorrow}>{'Due: tomorrow'} </div>
                : (numberOfDays(task.taskDeadline) >= 1 && numberOfDays(task.taskDeadline) <= 2)
                ? <div className={styles.dueTomorrow}>{'Due: ' + numberOfDays(task.taskDeadline) + ' day(s)'} </div>
                : <div className={styles.dueDate}>{format(task.taskDeadline, "MMM do, yyyy")} </div>
            }

            <button className={styles.deleteButton} onClick = {() => deleteItem(task.taskId)}>
              <TbTrash size={20} />
            </button>

          </div>
          
        ))}
       </div> 
  );
}



