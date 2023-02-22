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