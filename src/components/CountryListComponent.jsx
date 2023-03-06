import React, { useContext } from 'react'
import CountryCardComponent from './CountryCardComponent'
import { Context } from '../contexts/Context'

const CountryListComponent = ({ countries }) => {
    const { countrySearch, regionSearch } = useContext(Context)

    return (
        <section className='countries-section'>
            <div className='countries-list'>
                {
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
                }
            </div>
        </section>
    )
}

export default CountryListComponent