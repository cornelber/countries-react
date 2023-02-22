import React from 'react'
import { Link } from 'react-router-dom'
import ContainerComponent from '../components/ContainerComponent'
import LayoutComponent from '../components/LayoutComponent'

const Page404 = () => {
  return (
    <LayoutComponent>
      <ContainerComponent>
        <div className="unknown-wrapper">
          <h2 className='unknown-title'>
            404 - PAGE NOT FOUND
          </h2>
          <p className='unknown-description'>
            The Page you are looking for may have been moved, deleted or possibly never exist
          </p>
          <Link className='link' to='/'>
            Go to Homepage
          </Link>
        </div>
      </ContainerComponent>
    </LayoutComponent>
  )
}

export default Page404