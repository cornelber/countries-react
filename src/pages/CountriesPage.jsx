import React from 'react'
import useFetch from '../hooks/useFetch'
import { getCountriesEndpoint } from '../common/api/endpoints'
import { getCountriesDetails } from '../common/api/adaptors'
import FiltersComponent from '../components/Filters/FiltersComponent'
import ContainerComponent from '../components/ContainerComponent'
import LayoutComponent from '../components/LayoutComponent'
import CountryListComponent from '../components/CountryListComponent'
import LoaderComponent from '../components/LoaderComponent'

const CountriesPage = () => {
  const countriesEndpoint = getCountriesEndpoint()
  const { data, loading } = useFetch(countriesEndpoint)
  const adaptedData = getCountriesDetails(data)

  return (
    <LayoutComponent>
      <ContainerComponent>
        {
          loading ? (
            <div className="loader-wrapper">
              <LoaderComponent />
            </div>
          ) : (
            <div className='countries-wrapper'>
              <FiltersComponent />
              <CountryListComponent 
                countries={adaptedData}
              />
            </div>
          )
        }
      </ContainerComponent>
    </LayoutComponent>
  )
}

export default CountriesPage