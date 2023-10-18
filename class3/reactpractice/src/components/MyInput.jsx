//import { useState } from "react";
export default function MyInput({ setContent, content }) {
    //const [content, setContent] = useState("");
    
    //let textContent = content === "" ? "No content" : content; 


    return (
        <>
            <input type="text" onChange={ (e) => setContent(e.target.value)} value={content}/>
        </>
    
    )
  }