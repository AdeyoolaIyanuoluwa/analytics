import React from 'react'
import "./herosection.scss"
import Navbar from '../../components/Navbar/navbar'
import Button from '../../components/Button/button'
import bigimg from "../../assets/bigchart.png"
import smallimg from "../../assets/smallchart.png"

const Herosection = () => {
  return (
    <div className='herosection'>
      <Navbar/>
        <div className='section'>
            <div className='text-section'>
              <h1>Monitor your business on real-time dashboard</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. </p>
              
              <Button children="Try for free" mainbutton={false}/>
            </div>

            <div className='imag'>
                <img src={bigimg} className='big-chart' alt="big Chart" />
                <img src={smallimg} className='small-chart' alt="small chart" />
            </div>
        </div>
    </div>
  )
}

export default Herosection