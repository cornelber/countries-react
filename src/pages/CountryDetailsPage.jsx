import React from 'react'
import { useParams } from 'react-router-dom'
import { getCountryDetailsEndpoint } from '../common/api/endpoints'
import { getCountryDetails } from '../common/api/adaptors'
import BackButton from '../components/Buttons/BackButton'
import ContainerComponent from '../components/ContainerComponent'
import CountryDetailsComponent from '../components/CountryDetailsComponent'
import LayoutComponent from '../components/LayoutComponent'
import useFetch from '../hooks/useFetch'
import LoaderComponent from '../components/LoaderComponent'

const CountryDetailsPage = () => {

    const { countryCode } = useParams()

    const countryEndpoint = getCountryDetailsEndpoint(countryCode)
    const { data, loading } = useFetch(countryEndpoint)
    const adaptedCountryDetails = getCountryDetails(data)

    return (
        <LayoutComponent>
            <ContainerComponent>
                {
                    loading ? (
                        <LoaderComponent />
                    ) : (
                        <>
                            <div className="section-back">
                                <BackButton />
                            </div>
                            <CountryDetailsComponent countryDetails={adaptedCountryDetails}/>
                        </>
                    )
                }
            </ContainerComponent>
        </LayoutComponent>
    )
}

export default CountryDetailsPage