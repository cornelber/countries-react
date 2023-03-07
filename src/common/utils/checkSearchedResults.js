export const checkSearchedResults = (arr, country, region) => {
    return arr.filter(val => 
        val.name.toLowerCase().includes(country.toLowerCase()) &&
        val.region.toLowerCase().includes(region.toLowerCase())
    ).length
}