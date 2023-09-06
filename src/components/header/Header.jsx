import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me1.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (

    <header>
<div className='container header__container'>
      <div className='container_heading'>

      
      <h5>Hello I'm</h5>
      <h1>Ankit Pawar</h1>
      <h5 className='text-light'>Front End Developer</h5>
      </div>
    <CTA/>
    <HeaderSocials/>
    <div className='me'>
      <img src={ME}/>

    </div>
    <a href='#contact' className='scroll_down'>Scroll Down</a>
    
    </div>
    </header>
    
  )
}

export default Header