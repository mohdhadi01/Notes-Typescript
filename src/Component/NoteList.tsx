import React from 'react'
import { NoteModel } from '../Model/NoteModel';
import SingleNote from './SingleNote';

interface props{
    Notes:NoteModel[];
    setNotes:React.Dispatch<React.SetStateAction<NoteModel[]>>;

}

const NoteList = ({Notes,setNotes}:props) => {
  return (
    <div className='NoteContainer w-[80vh] flex flex-col gap-4  m-10'>
      <h1 className='text-[20px] font-serif'>Recent Notes</h1>
        {
          Notes.map((Note)=>{
            return(
              <ul className='NoteBox flex items-center pl-5 w-[90vw] h-[80px]'>
              <SingleNote Note={Note.Note}/>
              </ul>
              )
          })
        }
    </div>
  )
}

export default NoteList