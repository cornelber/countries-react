import React, { useState } from 'react'
import { dropdownOptionList } from '../../common/constants/FilterConstants'

const DropdownTrigger = () => {


    return (
        <button className='dropdown-trigger'>
            <span>Filter by Region</span>
            <ion-icon name="chevron-down"/>
        </button>
    )
}

const DropdownMenu = () => {


    return (
        <div className="dropdown-menu">
            <ul className='dropdown-list'>
                {dropdownOptionList.map((el, idx) => (
                    <li key={idx} className='dropdown-item'>
                        <button>
                            {el}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}



const DropdownFilterComponent = () => {
    


    return (
        <div className='dropdown-filter-wrapper'>
            <DropdownTrigger />
            <DropdownMenu />
        </div>
    )
}

export default DropdownFilterComponent

/*
import React, { useRef, useState } from 'react'
import { dropdownOptionList } from '../../common/constants/FilterConstants'; // ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
import { useDetectOutsideClick } from '../../hooks/useDetectOutsideClick';

const DropdownFilterComponent = () => {
    const dropdownRef = useRef(null)
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false)
    const [selectedOption, setSelectedOption] = useState(null);


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
                {
                    selectedOption ? (
                        <>
                            {selectedOption}
                            <ion-icon name="close" onClick={resetFilter} />
                        </>
                    ) : (
                        <>
                        Filter by Region 
                        <ion-icon name="chevron-down" />
                    </>
                    )
                }
            </button>
            {
                isActive && (
                    <div className="options-wrapper" ref={dropdownRef}>
                        {
                            dropdownOptionList.map((optionItem, idx) => (
                                <button key={idx} className='option' data-value={optionItem} onClick={handleSelectOption}>
                                    {optionItem}
                                </button>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}

export default DropdownFilterComponent
*/