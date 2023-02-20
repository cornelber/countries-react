import React from 'react'
import FiltersComponent from '../components/Filters/FiltersComponent'
import ContainerComponent from '../layouts/ContainerComponent'
import LayoutComponent from '../layouts/LayoutComponent'

const CountriesPage = () => {
  return (
    <div className='countries'>
        <LayoutComponent>
            <ContainerComponent>
                <FiltersComponent />
                {/* should be filter section and countries list section and pagination */}
            </ContainerComponent>
        </LayoutComponent>
    </div>
  )
}

export default CountriesPage