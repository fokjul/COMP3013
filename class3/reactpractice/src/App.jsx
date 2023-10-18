import { useState } from "react";
import './App.css'
import MyInput from './components/MyInput.jsx'




function App() {
  const [content, setContent] = useState("");


  return (
    <>
    <h1>My Website</h1>
    <MyInput content={content} setContent={setContent} />
    <br/>
    <br/>
    <MyInput content={content} setContent={setContent} />
      
    </>
  )
}

export default App
