
import React from 'react'
import classes from './Header.module.css'
const Header = () => {
  return (
          <header className={classes['header']}>
        <div className={classes['icon__left']}>
          <div className={classes['menu_bar']}>
          <img src="https://iili.io/mP1WT7.png"/>
          </div>
          <div className={classes['logo']}>
          <img src="https://i.postimg.cc/jqwyNVN1/logo-transparent.png"/>
          </div>
          
        </div>
        </header>
  )
}

export default Header