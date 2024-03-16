import React from 'react'

interface props {
    Note:string;
    setNote:React.Dispatch<React.SetStateAction<string>>
}

const InputField = ({Note,setNote}:props) => {

  return (
    <div>
        <form action="submit">
            <input type="text" placeholder='Enter Notes here' />
        </form>
    </div>
  )
}

export default InputField