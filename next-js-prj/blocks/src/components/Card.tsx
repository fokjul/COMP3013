'use client'
import { useEffect, useState } from "react";
import db from "@/db";
import updateBlock from "./UpdateBlock";


const Card = ({blockId, blockTitle, blockCode} : any) => {
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(blockTitle);
    const [code, setCode] = useState(blockCode)
    

   function handleTitleChange(event:any) {
    setTitle(event.target.value)
   }

   function handleCodeChange(event:any) {
    setCode(event.target.value)
   }

   function toggleEdit() {
    setIsEditing(!isEditing)
   }

   async function handleSubmit(event: any) {
    console.log("form submitted");
    event.preventDefault();
    
    await updateBlock({
        id: blockId,
        title,
        code
    });
}

    return (
        <form onSubmit={handleSubmit} className="flex flex-col justify-start">
            {isEditing 
                ? (<input 
                        type="text" 
                        id="title" 
                        name="title" 
                        value={title} 
                        onChange={handleTitleChange} 
                        className="border rounded mb-4"/>) 
                : (<h1 
                    className="text-xl font-bold mb-4">
                        {blockTitle}
                    </h1>)}
            {isEditing 
            ? (<input 
                    type="text" 
                    id="code" 
                    name="code" 
                    value={code} onChange={handleCodeChange} 
                    className="border rounded"/>) 
            : (<span>{blockCode}</span>)}
            {isEditing 
            ?   <button 
                    type="submit" 
                    onClick={toggleEdit}
                    className="border rounded bg-blue-600 w-[75px] text-white">
                        Save
                </button> 
            :   <button 
                    onClick={toggleEdit}
                    className="border rounded bg-blue-600 w-[75px] text-white">
                        Edit
                </button>} 

        </form>
    );
}

export default Card

