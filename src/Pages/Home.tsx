import React, { useState } from 'react'
import InputField from '../Component/InputField';
import { NoteModel } from '../Model/NoteModel';
import NoteList from '../Component/NoteList';
import '../Styling.css'
const Home:React.FC = () => {
    const [Note,setNote]= useState<string>("");
    const [Notes, setNotes]=useState<NoteModel[]>([])
  

    const handleAdd=(e:React.FormEvent)=>{
      e.preventDefault()
      if(Note){
        setNotes([...Notes,{id:Date.now(),Note,isDone:false}]);
        setNote("");
      }
    }
  return (
    <div>
        <InputField Note={Note} setNote={setNote} handleAdd={handleAdd}/>
        <NoteList Notes={Notes} setNotes={setNotes} />
        </div>
  )
}

export default Home