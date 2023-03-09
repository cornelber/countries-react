import React from 'react'
import { convertPopulationFormat } from '../common/utils/convertPopulationFormat'
import { formatListArray } from '../common/utils/formatListArray'

const CountryDetailsLeft = ({ countryDetails }) => {
    const { image, name } = countryDetails
    return (
        <div className="details-left">
            <img src={image} alt={name} />
        </div>
    )
}

const CountryDetailsRight = ({ countryDetails }) => {
    const { name, nativeName, population, region, subRegion, capital, tpd, currencies, languages, borderCountries } = countryDetails

    const convertedPopulation = convertPopulationFormat(population)
    const formatedLang = formatListArray(languages)

    return (
        <div className="details-right">
            <h2 className='header-details'>
                {name}
            </h2>
            <div className="main-details">
                <div className="col">
                    <ul>
                        <li>
                            Native Name: {nativeName}
                        </li>
                        <li>
                            Poplation: {convertedPopulation}
                        </li>
                        <li>
                            Region: {region}
                        </li>
                        <li>
                            Sub Region: {subRegion}
                        </li>
                        <li>
                            Capital: {capital}
                        </li>
                    </ul>
                </div>
                <div className="col">
                    <ul>
                        <li>
                            Top Level Domain: {tpd}
                        </li>
                        <li>
                            Currencies: {currencies}
                        </li>
                        <li>
                            Languages: {formatedLang}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-details">
                <p>
                    Border Countries: {borderCountries.map((country, idx) => (
                        <span key={idx} className='country-border'>{country}</span>
                    ))}
                </p>
            </div>
        </div>
    )
}

// Main component
const CountryDetailsComponent = ({ countryDetails }) => {

    return (
        <div className='country-details-section'>
            <CountryDetailsLeft countryDetails={countryDetails} /> 
            {/* sent image and name */}
            <CountryDetailsRight countryDetails={countryDetails}/>
            {/* sent rest of props */}
        </div>
    )
}

export default CountryDetailsComponent

