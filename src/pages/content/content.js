import React from 'react'
import "./content.scss"
import screen from "../../assets/screen-01.png"
import screen1 from "../../assets/screen-02.png"
import screen2 from "../../assets/screen-03.png"

const Section=({title,subtitle,image, leftImage})=>{
  return(
      <div>
             <div className='title-section'>
        {leftImage && <div>
            <img className='img1' src={image} alt="" />
    </div>}

    <div>
        <h6 className='title'>{title}</h6>
        <p className='sub-title'>{subtitle}</p>
    </div>
    {!leftImage &&
    <div>
            <img className='img' src={image} alt="" />
    </div>}
   </div>
  </div>
  )
}

const Content = () => {
  return (
    <div className='section-container'>

        <Section title="Automated Reports & Widget Alerts" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet." image={screen} />

        <Section title="Fully customizable to address your needs " subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet." image={screen1} leftImage />

        <Section title="Pre-built Dashboard Templates" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet." image={screen2}/>
    </div>
  )
}

export default Content