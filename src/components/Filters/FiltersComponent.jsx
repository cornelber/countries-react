import React from 'react'
import DropdownFilterComponent from './DropdownFilterComponent'
import SearchFilterComponent from './SearchFilterComponent'

const FiltersComponent = () => {
  return (
    <section className='filters-section'>
      <SearchFilterComponent />
      <DropdownFilterComponent />
    </section>
  )
}

export default FiltersComponent