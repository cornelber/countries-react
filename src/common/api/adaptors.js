export const getCountriesDetails = (apiResponse) => {
    if (!apiResponse || apiResponse.error) {
        return []
    }

    const rawCountriesDetails = apiResponse

    const adaptedCountriesDetails = rawCountriesDetails.map(country => {
        return {
            id: country.ccn3,
            name: country.name.official,
            region: country.region,
            capital: country.capital,
            population: country.population,
            image: country.flags.png
        }
    })

    return adaptedCountriesDetails
}

export const getCountryDetails = (apiResponse) => {
    if (!apiResponse || apiResponse.error) {
        return {}
    }

    const rawCountryDetails = apiResponse[0]

    
    const adaptedCountryDetails = {
        name: rawCountryDetails.name.common,
        nativeName:  Object.values(rawCountryDetails.name.nativeName)[0].official,
        population: rawCountryDetails.population,
        region: rawCountryDetails.region,
        subRegion: rawCountryDetails.subregion,
        capital: rawCountryDetails.capital,
        tpd: rawCountryDetails.tld,
        currencies: Object.values(rawCountryDetails.currencies)[0].name,
        languages: Object.values(rawCountryDetails.languages),
        borderCountries: rawCountryDetails.borders,
        image: rawCountryDetails.flags.png,
    }

    return adaptedCountryDetails
}