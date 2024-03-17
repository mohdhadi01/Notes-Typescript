import React from 'react'

interface props {
    Note:string;
    setNote:React.Dispatch<React.SetStateAction<string>>
    handleAdd:(e:React.FormEvent)=>void;
}

const InputField= ({Note,setNote,handleAdd}:props) => {

  return (
    <div className='InputDiv w100vw h-[80px] m-10 relative'>
        <form  action="submit" onSubmit={handleAdd}>
            <input type="text"
             placeholder='Enter Notes here'
             value={Note} 
             onChange={(e)=>setNote(e.target.value)}
             className='input_field w-[90vw] h-[80px]  pl-5'
              />
              <button className='input_btn text-white' type="submit">Save</button>
        </form>
    </div>
  )
}

export default InputField