import React from 'react'
import CountryCardComponent from './CountryCardComponent'

const CountryListComponent = ({ countries }) => {

    return (
        <section className='countries-section'>
            <div className='countries-list'>
                {
                    countries.map((country) => (
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