import React, { useState } from 'react'

const SearchForm = ({ children, onSubmit }) => {
  return (
    <form className='search-form' onSubmit={onSubmit}>
      {children}
    </form>
  )
}

const SearchInputWithIcon = ({ ...props }) => {
  return (
    <>
      <ion-icon name="search" />
      <input
        className='search-input' 
        type="text"
        {...props}
      />
    </>
  )
}

const SearchFilterComponent = () => {
  const [inputValue, setInputValue] = useState('');

  
  const handleSubmit = (e) => {
    e.preventDefault()
    
  }

  const handleInputValue = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <div className="search-filter-wrapper">
      <SearchForm onSubmit={handleSubmit}>
        <SearchInputWithIcon
          placeholder='Search for a country...'
          value={inputValue}
          onChange={handleInputValue}
        />
      </SearchForm>
    </div>
  )
}

export default SearchFilterComponent

// add validation for input