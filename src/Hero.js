import React from "react";
import Card from "./Card";
import {Link} from 'react-router-dom'
import  classes from "./Hero.module.css"


const Images = [
  {id:'i1', title:"hello", link:"https://i.postimg.cc/d0DLPgpT/logo.png"}
]
const Hero = () => {
  return (
    <div className={classes["container"]}>
      <header className={classes.header}>
        
        <div className={classes["logo"]}>
          
       <img src={Images[0].link}></img>
        </div>
        <div className={classes["nav"]}>
            <ul>
                
                <li> <Link href="/">Home</Link></li>
                <li> <Link href="/">About</Link></li>
                <li> <Link href="/selection">Team</Link></li>
                <li> <Link href="/">Contact</Link></li>
            </ul>

        </div>
        <a className={classes['login_classname']}>Get Started</a>
      </header>
      <main className={classes['main']}>
        <div className={classes['hero__heading']}>
          <h3>Start Your Journey Now</h3>
        </div>
        <div className={classes["card__container__outside"]}>
          <div className={classes["card__container__inside"]}>
            <Card className={classes['card']}>Learn From Peers and Senior</Card>
            <span className={classes['vertical_line']}></span>
            <Card className={classes['card']}>No Hidden Charges</Card>
            <span className="vertical_line"></span>
            <Card className="card">Consult with Tutor on realtime</Card>
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
