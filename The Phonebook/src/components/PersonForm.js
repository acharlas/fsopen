import React from 'react'

const PersonForm = ({addPerson, handlePersonNameChange, handlePersonNumberChange, newName, newNumber}) => {
    return (
        <form onSubmit={addPerson}>
            <div>
              name: <input value={newName} onChange={handlePersonNameChange}/>
            </div>
            <div>number: <input value={newNumber} onChange={handlePersonNumberChange}/></div>
            <div>
              <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm