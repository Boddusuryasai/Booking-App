import React from 'react'
import Main from './Main'
import PlacesList from './PlacesList'
import Footer from './Footer'

const Layout = () => {
  return (
    <div className="container">
    <Main/>
    <PlacesList/>
    <Footer/>
    </div>
  )
}

export default Layout