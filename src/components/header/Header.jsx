import React from 'react'
import './header.css'
import CTA from './CTA'


const Header = () => {
  return (
    <div className='container header__container'>
      <h5>Hello I'm</h5>
      <h1>Ankit Pawar</h1>
      <h5 className='text-light'>Front End Developer</h5>
    <CTA/>
    
    </div>
  )
}

export default Header