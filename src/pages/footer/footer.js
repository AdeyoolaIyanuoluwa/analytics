import React from 'react'
import "./footer.scss"
import Card from '../../components/Card/card'
import Footernav from '../../components/footernav/footernav'

const Footer = () => {
  return (
    <div className='footer'>
            <div className='pricing-container'>
                <h1 className='pricing-plan'>Pricing Plans</h1>
                <p className='sub-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. </p>

                <div className='card'>
                    <Card cardtitle="Starter" subtext="up to 3 users" cardprice="29" duration="per month" />

                    <Card cardtitle="Standard" subtext="up to 20 users" cardprice="99" duration="per month" />

                    <Card cardtitle="Premium" subtext="up to 200 users" cardprice="299" duration="per month" />
            </div>
            
            <div className='footernav'>
                    <Footernav/>
            </div>
            </div>
            
    </div>
  )
}

export default Footer