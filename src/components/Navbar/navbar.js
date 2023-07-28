import React from 'react'
import logo from "../../assets/logo (1).png"
import "./navbar.scss"
import Button from '../Button/button'
import Navlink from './navlink'



const Navbar = () => {
  return (
    <div>
        <nav>
            <ul className='Navbar'>
                  <div className='li'>
                    <img className='image' src={logo} alt="" />
                        <Navlink link="Products"/>
                        <Navlink link="Pricing"/>
                        <Navlink link="FAQ"/>
                        <Navlink link="Blog"/>
                        <Navlink link="Blog"/>
                        <div className='signup'>
                            <Navlink link="Sign in"/>
                            <div className='button'>
                                <Button children="Sign up" mainbutton={true}/> 
                            </div>
                        </div>
                  </div>
            </ul>
         </nav>
    </div>
  )
}

export default Navbar