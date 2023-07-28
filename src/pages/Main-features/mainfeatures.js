import React from 'react'
import "./mainfeatures.scss"
import IconSection from '../../components/Icon-section/iconsection'
import { iconsection } from '../../mocks/iconsectionmock'

const Mainfeatures = () => {
  return (
    <div className='main-container'>
      <div>
        <h1>Main Features</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet. Id vel in nam malesuada.</p>
        </div>

        <div className='icon-section'>
                
            {iconsection.map(({ icon, title, subtitle})=>(
                <IconSection icon={icon} title={title} subtitle={subtitle}/>
            ))}

            
        </div>
     </div>
  )
}

export default Mainfeatures