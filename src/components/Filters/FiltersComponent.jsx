import React from 'react'
import DropdownFilterComponent from './DropdownFilterComponent'
import SearchFilterComponent from './SearchFilterComponent'

const FiltersComponent = () => {
  return (
    <div className='filters-wrapper'>
        <SearchFilterComponent />
        <DropdownFilterComponent />
    </div>
  )
}

export default FiltersComponent