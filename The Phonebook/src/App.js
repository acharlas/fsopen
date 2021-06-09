import React, { useState } from 'react'
import FilterForm from './components/Filter'
import Numbers from './components/Numbers'
import PersonForm from './components/PersonForm'



const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [filterName, setFilterName] = useState('')

  const handleEvent = (handleFunction) => {
    const handler = (event) => (handleFunction(event.target.value))
    return handler
  }

  const personsToShow = filterName === '' 
    ? persons 
    : persons.filter(person => person.name.includes(filterName))

  const addPerson = (event) => {
    event.preventDefault()
    
    if (persons.some(person => person.name === newName)) {
      window.alert(`${newName} is already added to phonebook`)
    }
    else if (persons.some(person => person.number === newNumber)) {
      window.alert(`${newNumber} is already set to someone`)
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

  const clearFilter = () => {
    setFilterName('')
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <FilterForm handleFilterChange={handleEvent(setFilterName)} clearFilter={clearFilter} filter={filterName}/>
      <h2>Add a new</h2>
      <PersonForm 
        addPerson={addPerson} 
        handlePersonNameChange={handleEvent(setNewName)} 
        handlePersonNumberChange={handleEvent(setNewNumber)} 
        newName={newName} 
        newNumber={newNumber}
      />
      <h2>Numbers</h2>
      <Numbers personsToShow={personsToShow}/>
    </div>
  )
}

export default App