import React from 'react';
import HeaderComponent from './HeaderComponent';

const LayoutComponent = ({ children }) => {
  return (
    <>
        <HeaderComponent />
        <main role='main' className='main'>
            {children}
        </main>  
    </>
  )
}

export default LayoutComponent