import React from 'react'

const Person = ({person}) => <p> {person.name} {person.number} </p>

const Numbers = ({personsToShow}) => {
    return (
      <div>
        {personsToShow.map(person => <Person key={person.name} person={person}/> )}
      </div>  
    )
}

export default Numbers