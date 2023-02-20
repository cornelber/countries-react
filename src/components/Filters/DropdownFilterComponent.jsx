import React, { useState } from 'react'

// TODO: 
// refactor component

const DropdownFilterComponent = () => {
    const [isActive, setIsActive] = useState(false)
    const [selectedOption, setSelectedOption] = useState('');
    const optionList = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];


    const handleSelectOption = (e) => {
        setSelectedOption(e.target.attributes.getNamedItem('data-value').value)
        setIsActive(prev => !prev)
    }

    const handleDropdownView = () => {
        setIsActive(prev => !prev)
    }

    const resetFilter = () => {
        setSelectedOption('')
    }


    return (
        <div className="dropdown-filter-wrapper">
            <button className={`select ${isActive ? 'active' : ''}`} onClick={handleDropdownView}>
                {selectedOption === '' ? 'Filter by Region' : selectedOption}
                {
                    selectedOption === '' ? (
                        <ion-icon name="chevron-down" />
                    ) : (
                        <button className='reset-filter-btn' onClick={resetFilter}>
                            <ion-icon name="close" />
                        </button>
                    )
                }
            </button>
            {
                isActive ? (
                    <div className="options-wrapper">
                        {
                            optionList.map((optionItem, idx) => (
                                <button key={idx} className='option' data-value={optionItem} onClick={handleSelectOption}>
                                    {optionItem}
                                </button>
                            ))
                        }
                    </div>
                ) : null
            }
        </div>
    )
}

export default DropdownFilterComponent