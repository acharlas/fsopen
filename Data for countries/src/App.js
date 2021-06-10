import React, { useEffect, useState } from 'react'
import FilterForm from './components/Filter'
import axios from 'axios'
import CountriesToShow from './components/CountriesToShow'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filterName, setFilterName] = useState('')

  const handleEvent = (handleFunction) => {
    const handler = (event) => (handleFunction(event.target.value))
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
      <FilterForm handleFilterChange={handleEvent(setFilterName)} clearFilter={() => setFilterName('')} filter={filterName}/>
      <CountriesToShow countriesToShow={countriesToShow}/>
    </div>
  )
}

export default App