import React from "react"
import {Route, Routes} from 'react-router-dom'
import CountriesPage from "./pages/CountriesPage"
import CountryDetailsPage from "./pages/CountryDetailsPage"
import HomePage from "./pages/HomePage"
import Page404 from "./pages/Page404"

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/countries' element={<CountriesPage />} />
        <Route path='/countries/:countryCode' element={<CountryDetailsPage />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </>
  )
}

export default App
