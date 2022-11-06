import React from "react";
import Card from "./Card";
import {Link} from 'react-router-dom'
import  classes from "./Hero.module.css"
import Nav from './Nav'

const Images = [
  {id:'i1', title:"hello", link:"https://i.postimg.cc/d0DLPgpT/logo.png"}
]
const Hero = () => {
  return (
    <div className={classes["container"]}>
      <header className={classes.header}>
        <div className={classes["logo"]}>
          
       <img src={"https://i.postimg.cc/jqwyNVN1/logo-transparent.png"}></img>
        </div>
        <div className={classes["nav"]}>
            <ul>
                
                <li> <Nav to="/">Home</Nav></li>
                <li> <Nav to="/about">About</Nav></li>
                <li> <Nav to="/team">Team</Nav></li>
                <li> <Nav to="/contact">Contact</Nav></li>
            </ul>

        </div>
        <Nav className={classes['login_classname']} to="/get-started" >GetStarted</Nav>
        <Nav className={classes['login_classname']}>Login</Nav>
      </header>
      <main className={classes['main']}>
        <div className={classes['hero__heading']}>
          <h3>Start Your Learning Journey Now</h3>
          <img src="" />
        </div>
        <div className={classes["card__container__outside"]}>
          <div className={classes["card__container__inside"]}>
            <Card className={classes['card']}>
              <div className={classes['card__back']}>
              <img src="https://i.postimg.cc/XYXXm0ws/logo2png.png" alt="img"/>
              </div>
            <p>Learn From Peers and Senior</p>
            </Card>
            <span className={classes['vertical_line']}></span>
            <Card className={classes['card']}>
              <div className={classes['card__back']}>
              <img src="https://i.postimg.cc/XYXXm0ws/logo2png.png" alt="img"/>
              </div>
            <p>No Hidden Charges</p> 
            </Card>
            <span className={classes['vertical_line']}></span>
            <Card className={classes['card']}>
              <div className={classes['card__back']}>
              <img src="https://i.postimg.cc/KjB6k5Hg/4035928.png" alt="img"/>
              </div>
            <p>Consult with Tutor on realtime</p>
            </Card>
          </div>
        </div>
      <hr></hr>
      <footer className="footer">
        <div className="social__links">
            <img src="" alt=""></img>
            <img src="" alt=""></img>
            <img src="" alt=""></img>

        </div>
        <div className="contact">
            <img src="" alt=""></img>
            <span>+91932829392</span>
        </div>
      </footer>
      </main>
    </div>
  );
};

export default Hero;
