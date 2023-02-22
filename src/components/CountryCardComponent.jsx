import React from 'react'
import { Link } from 'react-router-dom'

const CountryCardComponent = ({ name, capital, region, population, image }) => {

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
                        <span>Population:</span> {population}
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