import React from 'react'
import Header from '../shared/header/header'
import Footer from '../shared/Footer'
import ContactWsp from '../shared/ContactButton/Fab'
const Layout = ({children}) => {
  return (
    <>
        <Header/>
        <main>{children}</main>
        <Footer/>
        <ContactWsp/>
    </>
  )
}

export default Layout
