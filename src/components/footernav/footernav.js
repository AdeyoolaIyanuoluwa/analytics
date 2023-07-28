import React from 'react'
import logo from "../../assets/footerlogo.png"
import Navlink from '../Navbar/navlink'
import "./footernav.scss"
import facebook from "../../assets/Facebook.png"
import insta from "../../assets/Instagram.png"
import twitter from "../../assets/Twitter.png"

const Footernav = () => {
  return (
    <div>
        <nav>
            <ul className='Navbar2'>
                  <div className='li2'>
                    <img className='image2' src={logo} alt="" />
                        <Navlink link="Products"/>
                        <Navlink link="Pricing"/>
                        <Navlink link="FAQ"/>
                        <Navlink link="Blog"/>
                        <Navlink link="Blog"/>
                        
                        <div className='socials'>
                           <div className='social-img'>
                                <img src={facebook} alt="" />
                           </div>
                            <div className='social-img'>
                                <img src={twitter} alt="" />
                            </div>
                            <div className='social-img'>
                                <img  src={insta} alt="" />
                            </div>
                        </div>
                  </div>
            </ul>
         </nav>
    </div>
  )
}

export default Footernav