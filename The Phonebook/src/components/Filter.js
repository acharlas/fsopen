import React from 'react'

const FilterForm = ({handleFilterChange, clearFilter, filter}) => {
    return (
        <div>
        filter shown with <input value={filter} onChange={handleFilterChange}/>
        <button onClick={clearFilter}>clear</button>
        </div>
    )
}

export default FilterForm 
