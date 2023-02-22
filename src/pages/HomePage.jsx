import React from 'react'
import { Link } from 'react-router-dom'
import ContainerComponent from '../components/ContainerComponent'
import LayoutComponent from '../components/LayoutComponent'

const HomePage = () => {
  return (
    <LayoutComponent>
        <ContainerComponent>
          <div className='home-wrapper'>
            <h2 className='home-title'>Frontend Mentor - REST Countries API</h2>
            <p className='home-description'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link className='link' to='/countries'>
              Get Started
            </Link>
          </div>
        </ContainerComponent>
      </LayoutComponent>
  )
}

export default HomePage