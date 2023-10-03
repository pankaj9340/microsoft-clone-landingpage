import React from 'react'
import Footer from './components/Microsoft/Footer'
import Logo from './components/Microsoft/Logo'
import Logo2 from './components/Microsoft/Logo2'

import Navbar from './components/Microsoft/Navbar'
import Products from './components/Microsoft/Products'
import Section from './components/Microsoft/Section'
import Section2 from './components/Microsoft/Section2'


// import {Navbar} from './components/Landing/Navbar';
// import Section from './components/Landing/Section';
const App = () => {
  return (
    <div className='container mx-auto'>
      
        <Navbar/>
        <Section/>
        <Logo/>
        <Products/>
        <Section2/>
        <Logo2/>
        <Footer/>
        
    </div>
  )
}

export default App