import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {IoLogoGithub} from 'react-icons/io'
import {BsInstagram} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        
        <a href='https://www.linkedin.com/in/ankit-pawar-75277b80/' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/ankitsmee' target='_blank'><IoLogoGithub/></a>
        <a href='https://www.instagram.com' target='_blank'><BsInstagram/></a>

    
    </div>
  )
}

export default HeaderSocials