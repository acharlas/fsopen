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
    : persons.filter(person => {
      const regex = new RegExp(filterName, 'i')
      return(regex.test(person.name))
    })

  const addPerson = (event) => {
    event.preventDefault()
    
    if (persons.some(person => person.name === newName)) {
      if(window.confirm(`${newName} is already added to phonebook`)) {
        const person = persons.find(person => person.name === newName)
        const changePerson = {...person, number: newNumber}
        personServices
          .update(person.id, changePerson)
          .then(data => setPersons(persons.map(person => person.name !== newName ? person : data)))
      }
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

  const deleteNumber = (id, name) => {
    if(window.confirm(`Do you really want to delete ${name}`)) {
      personServices
       .deleteNum(id)
        .then(setPersons(persons.filter(n => n.id !== id)))
    }
  }

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
      {personsToShow.map(person => 
        <Numbers key={person.id} person={person} deleteNumber={() => deleteNumber(person.id, person.name)}/>
        )}
    </div>
  )
}

export default App