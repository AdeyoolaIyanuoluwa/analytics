import React from 'react'
import "./card.scss"
import Button from '../Button/button'
const Card = ({cardtitle,subtext,cardprice,duration}) => {
  return (
    <div>
        <div className='card-container'>
            <p className='cardtitle'>{cardtitle}</p>
            <p className='subtext'>{subtext}</p>
            <hr className='hr'/>
            <span className='cardprice'>$<span className='price'>{cardprice}</span></span>
            <p className='duration'>{duration}</p>

            <div className='cardbutton'>
            {<Button mainbutton={true} children="Order"/>}
            </div>
        </div>
    </div>
  )
}

export default Card