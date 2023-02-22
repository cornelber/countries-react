import React from 'react'
import { Link } from 'react-router-dom'
import LayoutComponent from '../components/LayoutComponent'

const Page404 = () => {
  return (
    <LayoutComponent>
      <div className="unknown-page">
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
    </LayoutComponent>
  )
}

export default Page404