import React from 'react'

interface props {
    Note:string;
    setNote:React.Dispatch<React.SetStateAction<string>>
    handleAdd:(e:React.FormEvent)=>void;
}

const InputField= ({Note,setNote,handleAdd}:props) => {

  return (
    <div>
        <form action="submit" onSubmit={handleAdd}>
            <input type="text"
             placeholder='Enter Notes here'
             value={Note} 
             onChange={(e)=>setNote(e.target.value)}
              />
              <button type="submit">Save</button>
        </form>
    </div>
  )
}

export default InputField