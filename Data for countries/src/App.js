import React, { useEffect, useState } from 'react'
import FilterForm from './components/Filter'
import axios from 'axios'
import CountriesToShow from './components/CountriesToShow'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filterName, setFilterName] = useState('')

  const handleChangeEvent = (handleFunction) => {
    const handler = (event) => (handleFunction(event.target.value))
    return handler
  }

  const handleClickEvent = (handleFunction) => {
    const handler = (event) => handleFunction(event.target.id)
    return handler
  }

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {setCountries(response.data)})
  },[])

  const countriesToShow = filterName === '' 
    ? countries 
    : countries.filter(country => {
      const regex = new RegExp(filterName, 'i')
      return(regex.test(country.name))
    })
  return (
    <div>
      <FilterForm 
				handleFilterChange={handleChangeEvent(setFilterName)} 
				clearFilter={() => setFilterName('')} 
				filter={filterName}/>
      <CountriesToShow countriesToShow={countriesToShow} handleClick={handleClickEvent(setFilterName)}/>
    </div>
  )
}

export default App