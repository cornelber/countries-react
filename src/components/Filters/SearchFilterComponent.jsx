import React, { useState, useContext } from 'react'
import { Context } from '../../contexts/Context'

const SearchForm = ({ children, onSubmit }) => {
  return (
    <form className='search-form' onSubmit={onSubmit}>
      {children}
    </form>
  )
}

const SearchResetIcon = ({onReset}) => {
  return (
    <button className='input-reset-btn' onClick={onReset}>
        <ion-icon name='close'/>
    </button>
  )
}

const SearchInputWithIcon = ({ ...props }) => {
  return (
    <label>
      <ion-icon name='search' />
      <input
        className='search-input' 
        type='text'
        {...props}
      />
    </label>
  )
}

const SearchFilterComponent = () => {
  const { setCountrySearch } = useContext(Context)
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleReset = () => {
    setInputValue('')
    setCountrySearch('')
  }

  const handleInputValue = (e) => {
    setInputValue(e.target.value)
    setCountrySearch(inputValue)
  }

  return (
    <div className='search-filter-wrapper'>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInputWithIcon
          placeholder='Search for a country...'
          value={inputValue}
          onChange={handleInputValue}
        />
      </SearchForm>
      {
        inputValue && <SearchResetIcon onReset={handleReset}/>
      }
    </div>
  )
}

export default SearchFilterComponent

// add validation for input