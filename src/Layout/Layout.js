import React from 'react'
import Header from '../shared/header/header'
import Footer from '../shared/Footer'
import ContactWsp from '../shared/ContactButton/Fab'
import HeadPage from '../shared/HeadPage/headPage'

const Layout = ({children}) => {
  return (
    <>
        <HeadPage>
        <title> CYVM | Consultores financieros </title>
        </HeadPage>
        <Header/>
        <main>{children}</main>
        <Footer/>
        <ContactWsp/>
    </>
  )
}

export default Layout
