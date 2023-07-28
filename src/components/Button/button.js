import React from 'react'
import "./button.scss"

const Button = ({children,mainbutton,subbutton}) => {
  return (
    <div>
      <button className={ mainbutton ? "mainbutton": "subbutton"}>{children}</button>
    </div>
  )
}

export default Button