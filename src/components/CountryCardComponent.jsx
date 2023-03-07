import React from 'react'
import { Link } from 'react-router-dom'
import { convertPopulationFormat } from '../common/utils/convertPopulationFormat'

const CountryCardComponent = ({ name, capital, region, population, image }) => {
    const convertedPopulation = convertPopulationFormat(population)

    return (
        <div className='card'>
            <Link>
                <div className="card-image-wrapper">
                    <img src={image} alt={name} />
                </div>
                <div className="card-details-wrapper">
                    <h2 className='card-name'>{name}</h2>
                    <div className='card-details'>
                        <p>
                            <span>Population:</span> {convertedPopulation}
                        </p>
                        <p>
                            <span>Region:</span> {region}
                        </p>
                        <p>
                            <span>Capital:</span> {capital}
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default CountryCardComponent