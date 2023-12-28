import React from 'react'
import Header from '../shared/header/header'
import Footer from '../shared/Footer'
import ContactWsp from '../shared/ContactButton/Fab'
const Layout = ({children}) => {
  return (
    <>
      <div class="absolute z-10 bottom-0 left-0 right-0 top-0  h-full w-full bg-[linear-gradient(to_right,#f0f0f061_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f061_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        <Header/>
        <main>{children}</main>
        <Footer/>
        <ContactWsp/>
    </>
  )
}

export default Layout
