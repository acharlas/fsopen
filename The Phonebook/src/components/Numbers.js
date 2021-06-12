import React from 'react'

const Numbers = ({person, deleteNumber}) => {
    return (
      <div>
        {person.name} {person.number}
        <button onClick={deleteNumber}>delete</button>
      </div>  
    )
}

export default Numbers