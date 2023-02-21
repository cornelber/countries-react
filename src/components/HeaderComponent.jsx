import React from 'react';
import { Link } from 'react-router-dom';
import ContainerComponent from './ContainerComponent';
import ThemeTogglerButton from './Buttons/ThemeTogglerButton';

const HeaderComponent = () => {
  return (
    <header className='header'>
      <ContainerComponent>
          <Link to='/'>
            <h1 className='header-logo'>witw</h1>
          </Link>
          <ThemeTogglerButton />
      </ContainerComponent>
    </header>
  )
}

export default HeaderComponent