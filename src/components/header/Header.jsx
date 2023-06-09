import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import { TypeAnimation } from 'react-type-animation';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h4>Hello I'm</h4>
        <h1>Yogesh Vilas Ghate</h1>
        <TypeAnimation className="text-light"
      sequence={[
        'Information Technology Engineer', // Types 'One'
        2000, // Waits 1s
        'Java Fullstack Developer', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        
        () => {
          console.log('Sequence completed'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '1em', display: 'inline-block' }}
      />
        <CTA />
        <HeaderSocials />

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header