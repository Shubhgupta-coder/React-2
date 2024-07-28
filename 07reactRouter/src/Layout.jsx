import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
   <>
   <Header/>
   {/* ye outlet hmara layout ko as a base use krlega or upar niche jo bhi cheeze aaegi use aese hi rkhega */}
   <Outlet/>  
   <Footer/>
   </>
  )
}

export default Layout
