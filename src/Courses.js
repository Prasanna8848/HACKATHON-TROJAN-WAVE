import React from 'react'
import classes from './Courses.module.css'
import Card from './Card'
const Courses = () => {
  return (
    <div className={classes['container']}>
      <header className={classes['header']}>
        
        </header>
      <div className={classes['container__inner']}>
      <div className={classes['title']}>
      <img src="https://iili.io/mP1RIt.png" alt="image"/>
        <h1>What do you want to learn today?</h1>
      </div>
        <div className={classes['card__container']}>
        <Card className={classes['card']}>
          <img src="https://iili.io/mPlPN1.png" alt="sub"/>
        </Card>
        <Card className={classes['card']}>
          <img src="https://iili.io/mP0Txe.png" alt="sub"/>
        </Card>
        <Card className={classes['card']}>
          <img src="https://iili.io/mP14ZF.png" alt="sub"/>
        </Card>
        <Card className={classes['card']}>
          <img src="https://iili.io/mP18vV.png" alt="sub"/>
        </Card>
        <Card className={classes['card']}>
          <img src="https://iili.io/mPEd6G.png" alt="sub"/>
        </Card>
        <Card className={classes['card']}>
          <img src="https://iili.io/mP0xO7.png" alt="sub"/>
        </Card>
        </div>
      </div>
      <footer>
      
      </footer>
    </div>
  )
}

export default Courses