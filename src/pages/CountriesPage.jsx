import React from 'react'
import FiltersComponent from '../components/Filters/FiltersComponent'
import ContainerComponent from '../components/ContainerComponent'
import LayoutComponent from '../components/LayoutComponent'

const CountriesPage = () => {
  return (
    <div className='countries'>
      <LayoutComponent>
        <ContainerComponent>
          <FiltersComponent />
        </ContainerComponent>
      </LayoutComponent>
    </div>
  )
}

export default CountriesPage