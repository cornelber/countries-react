import { useState, createContext } from 'react'

export const Context = createContext();

const ContextProvider = ({children}) => {
    const [countrySearch, setCountrySearch] = useState('');
    const [regionSearch, setRegionSearch] = useState('');    

    return (
        <Context.Provider value={{
            countrySearch, setCountrySearch,
            regionSearch, setRegionSearch,
        }}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;