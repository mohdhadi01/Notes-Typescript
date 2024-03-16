import React from 'react'
import { NoteModel } from '../Model/NoteModel';

interface props{
    Notes:NoteModel[];
    setNotes:React.Dispatch<React.SetStateAction<NoteModel[]>>;

}

const NoteList = ({Notes,setNotes}:props) => {
  return (
    <div>
        {
          Notes.map((Note)=>(Note.Note))
        }
    </div>
  )
}

export default NoteList