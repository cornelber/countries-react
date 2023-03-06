import React, { useRef, useState, useContext } from 'react'
import classnames from 'classnames'
import { DROPDOWN_OPTIONS } from '../../common/constants/FilterConstants'
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick'
import { Context } from '../../contexts/Context'

const DropdownTrigger = ({ label, selectedOption, isOpen, onClick, onReset}) => {
    const dropdownTriggerClassNames = classnames('dropdown-trigger', {
        'active': isOpen,
    })
    
    const getDropdownTriggerIcon = () => {
        if (selectedOption) {
            return (
                <div role='button' onClick={onReset}>
                    <ion-icon name='close'/>
                </div>
            )
        }

        return <ion-icon name='chevron-down'/>
    }

    return (
        <button className={dropdownTriggerClassNames} onClick={onClick}>
            <span>{label}</span>
            {getDropdownTriggerIcon()}
        </button>
    )
}

const DropdownMenu = ({ options, selectedOption, isOpen, onClick }) => {
    if (!isOpen) {
        return null
    }

    const getDropdownItemClassNames = (option) => {
        return classnames('dropdown-item', {
            'selected': option === selectedOption,
        })
    }

    return (
        <div className='dropdown-menu'>
            <ul className='dropdown-list'>
                {options.map((option, idx) => (
                    <li key={idx} className={getDropdownItemClassNames(option)}>
                        <button onClick={onClick}>
                            {option}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

const DropdownFilterComponent = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState(null)
    const dropdownRef = useRef(null)
    const { setRegionSearch } = useContext(Context)

    const handleDropdownMenu = () => {
        setIsOpen(!isOpen)
    }

    const handleOptionSelect = (e) => {
        setSelectedOption(e.target.innerHTML)
        setIsOpen(false)
        setRegionSearch(e.target.innerHTML)
    }

    const handleReset = () => {
        setSelectedOption(null)
        setRegionSearch('')
    }

    useDetectOutsideClick(dropdownRef, () => {
        setIsOpen(false)
    })

    return (
        <div className='dropdown-filter-wrapper' ref={dropdownRef}>
            <DropdownTrigger
                label={selectedOption || 'Filter by Region'}
                isOpen={isOpen}
                selectedOption={selectedOption}
                onClick={handleDropdownMenu}
                onReset={handleReset}
            />
            <DropdownMenu 
                options={DROPDOWN_OPTIONS}
                isOpen={isOpen}
                selectedOption={selectedOption}
                onClick={handleOptionSelect}
            />
        </div>
    )
}

export default DropdownFilterComponent