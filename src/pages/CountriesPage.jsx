import React from 'react'
import useFetch from '../hooks/useFetch'
import { getCountriesEndpoint } from '../common/api/endpoints'
import { getCountriesDetails } from '../common/api/adaptors'
import FiltersComponent from '../components/Filters/FiltersComponent'
import ContainerComponent from '../components/ContainerComponent'
import LayoutComponent from '../components/LayoutComponent'
import CountryListComponent from '../components/CountryListComponent'

const CountriesPage = () => {
  const countriesEndpoint = getCountriesEndpoint()
  const { data } = useFetch(countriesEndpoint)
  const adaptedData = getCountriesDetails(data)

  return (
    <LayoutComponent>
      <ContainerComponent>
        <div className='countries-wrapper'>
          <FiltersComponent />
          <CountryListComponent 
            countries={adaptedData}
          />
        </div>
      </ContainerComponent>
    </LayoutComponent>
  )
}

export default CountriesPage