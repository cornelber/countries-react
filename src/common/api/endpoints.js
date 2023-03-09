export const getCountriesEndpoint = () => {
    return  `https://restcountries.com/v3.1/all`
}

export const getCountryDetailsEndpoint = (code) => {
    return `https://restcountries.com/v3.1/alpha/${code}`
}