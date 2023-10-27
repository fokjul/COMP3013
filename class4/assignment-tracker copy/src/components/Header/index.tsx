import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type Props = {
  newTask: object;
  task: string;
  date: Date;
  handleChange(): void;
  addItem(): void;
  selectDate(): void;
  startDate: Date;
  setStartDate(): void;
}

export function Header({task, handleChange, addItem, startDate, setStartDate, defaultValue, setDefaultValue}: Props) {
  //const [defaultValue, setDefaultValue] = useState('Set Date');

  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>

      <form className={styles.newAssignmentForm}>
        <div className={styles.inputWrapper}>
          <input 
            placeholder="Add a new assignment" 
            type="text" 
            value={task} 
            onChange={handleChange} 
          />
          <DatePicker 
            id="datePicker"
            selected={startDate} 
            onChange={(date) => {setStartDate(date); setDefaultValue(date)}} 
            className={styles.datePicker}
            value={defaultValue}
          />
        </div>
        <button className={styles.addAssignmentButton} disabled={!task} onClick={addItem}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );

  
}
