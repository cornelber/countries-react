import React, { useState } from 'react'

const SearchFilterComponent = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()

    setInputValue('')
  }

  const handleInputValue = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <div className="search-filter-wrapper">
      <form className='form' onSubmit={handleSubmit}>
        <ion-icon name="search" />
        <input
          className='input-search' 
          type="text" 
          placeholder='Search for a country'
          value={inputValue}
          onChange={handleInputValue}
        />
      </form>
    </div>
  )
}

export default SearchFilterComponent