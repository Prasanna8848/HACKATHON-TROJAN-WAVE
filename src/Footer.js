import React from 'react'
import classes from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Footer = () => {
  return (
    <div className={classes['footer']}>
    <div className={['social']}>
    <img src="instagaram ing"
      />
      
    <img src=""/>
    </div>
    <div className={classes['phone']}>
      <img src="https://postimg.cc/VrBJTqMW"/>
      <span> +912389233323 </span>
    </div>
    </div>
  )
}

export default Footer
