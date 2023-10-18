import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
//import { useState } from "react";



export function Header({task, handleChange, addItem}) {

  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>

      <form className={styles.newAssignmentForm}>
        <input placeholder="Add a new assignment" type="text" value={task} onChange={handleChange}/>
        <button className={styles.addAssignmentButton} disabled={!task} onClick={addItem}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
