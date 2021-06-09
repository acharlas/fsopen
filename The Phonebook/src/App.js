import React, { useState } from 'react'

const Person = ({person}) => <p> {person.name} {person.number} </p>

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number:'555-864'}
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const handlePersonNameChange = (event) => {
    setNewName(event.target.value) 
  }
  const handlePersonNumberChange = (event) => {
    setNewNumber(event.target.value) 
  }

  const addPerson = (event) => {
    event.preventDefault()
    
    if (persons.some(person => person.name === newName)) {
      window.alert(`${newName} is already added to phonebook`)
    }
    else {
      const personObject = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(personObject))
    }
    setNewNumber('')
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePersonNameChange}/>
        </div>
        <div>number: <input value={newNumber} onChange={handlePersonNumberChange}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <Person key={person.name} person={person}/> )}
    </div>
  )
}

export default App