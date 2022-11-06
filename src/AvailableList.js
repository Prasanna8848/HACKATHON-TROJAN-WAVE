import React from 'react'
import classes from './AvailableList.module.css'

const AvailableList = ({rating , rating_img, university, sem, avatar, fee, name}) => {
  return (

    <div className={classes['card__inside']}>
      <div className={classes['element__top']}>
        <img src={avatar}/>
        <h2>{name}</h2>
        <h4>{sem}</h4>
      </div>
      <div className={classes['element__bottom']}>
      <div className={classes['rating']}>
      <img src={rating_img}/>
      <span>{rating}</span>
      </div>
        <div className={classes['description']}>
        <p>
          {university}
        </p>
        <p>{fee}</p>
        </div>
      </div>
    </div>
  )
}

export default AvailableList