import React from 'react'

const FilterForm = ({handleFilterChange, clearFilter, filter}) => {
  return (
    <div>
      Find a country <input value={filter} onChange={handleFilterChange}/>
      <button onClick={clearFilter}>clear</button>
    </div>
  )
}

export default FilterForm 
