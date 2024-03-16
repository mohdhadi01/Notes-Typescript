import React, { useState } from 'react'
import InputField from '../Component/InputField';

const Home = () => {
    const [Note,setNote]= useState<string>("");

  return (
    <div>
        <InputField Note={Note} setNote={setNote}/>
        </div>
  )
}

export default Home