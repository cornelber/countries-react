import React, { useContext } from 'react'
import CountryCardComponent from './CountryCardComponent'
import { Context } from '../contexts/Context'
import { checkSearchedResults } from '../common/utils/checkSearchedResults'

const CountryListComponent = ({ countries }) => {
    const { countrySearch, regionSearch } = useContext(Context)
    let searchedCountries = checkSearchedResults(countries, countrySearch, regionSearch)

    return (
        <section className='countries-section'>
            <div className='countries-list'>
                {
                    searchedCountries !== 0 ? (
                        countries.filter((el) => 
                            el.name.toLowerCase().includes(countrySearch.toLowerCase()) &&
                            el.region.toLowerCase().includes(regionSearch.toLowerCase())  
                        ).map((country) => (
                            <CountryCardComponent
                                key={Number(country.id)}
                                name={country.name}
                                capital={country.capital}
                                region={country.region}
                                population={country.population}
                                image={country.image}
                            />
                        ))
                    ) : (
                        <p className='countries-search-message'>No results... try another way ;)</p>
                    )
                }
            </div>
        </section>
    )
}

export default CountryListComponent