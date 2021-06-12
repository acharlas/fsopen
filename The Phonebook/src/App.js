import React, { useState, useEffect } from 'react'
import FilterForm from './components/Filter'
import Numbers from './components/Numbers'
import PersonForm from './components/PersonForm'
import personServices from './services/phonebook'



const App = () => {
  const [ persons, setPersons ] = useState([])
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
      personServices
        .create(personObject)
        .then(data => setPersons(persons.concat(data)))
    }
    setNewNumber('')
    setNewName('')
  }

  useEffect(() => {
    
    personServices.getAll()
    .then(data => setPersons(data))
  }, [])

  return (
    <div>
      <h1>Phonebook</h1>
      <FilterForm handleFilterChange={handleEvent(setFilterName)} clearFilter={() => setFilterName('')} filter={filterName}/>
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