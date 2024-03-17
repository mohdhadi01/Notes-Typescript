import React from 'react'

type props={
    Note:string;
}
const SingleNote = ({Note}:props) => {
  return (
    <div>
        <h1>{Note}</h1>
    </div>
  )
}

export default SingleNote