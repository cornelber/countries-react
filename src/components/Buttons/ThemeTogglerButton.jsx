import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

const ThemeTogglerButton = () => {
    const {isDarkTheme, toggleTheme} = useContext(ThemeContext)

        // update body classname if theme is changed
        useEffect(() => {
            document.body.className = `theme-${isDarkTheme ? 'dark' : 'light'}`
        }, [isDarkTheme])

    return (
        <label className='toggler-label'>
            <input className='toggler-input' type="checkbox" checked={isDarkTheme} onChange={toggleTheme}  />
            <span className='toggler-icons-wrapper'>
                <ion-icon name='sunny' />
                <ion-icon name='moon' />
            </span>
        </label>
    )
}

export default ThemeTogglerButton