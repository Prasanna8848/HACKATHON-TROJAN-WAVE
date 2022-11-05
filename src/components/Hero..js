import React from "react";
import Login from "./UI/Login";
import Card from "./UI/Card";
import {logo} from '../public/images/logo.png'
import  classes from "./hero.module.css"

const Images = [
  {id:'i1', title:"hello", link:"https://i.postimg.cc/d0DLPgpT/logo.png"}
]
const Hero = () => {
  return (
    <div className={classes["container"]}>
      <header className={classes.header}>
        
        <div className="logo">
          
       <Image src={Images[0].link} width={100} height={100}></Image>
        </div>
        <div className="nav">
            <ul>
                
                <li> <Link href="/">Home</Link></li>
                <li> <Link href="/">About</Link></li>
                <li> <Link href="/selection">Team</Link></li>
                <li> <Link href="/">Contact</Link></li>
            </ul>

        </div>
        <Login className="login_classname">Get Started</Login>
      </header>
      <main className="main">
        <div className="hero__heading">
          <h3>Start Your Journey Now</h3>
        </div>
        <div className="card__container__outside">
          <div className="card__container__inside">
            <Card className="card">Learn From Peers and Senior</Card>
            <span className="vertical_line"></span>
            <Card className="card">No Hidden Charges</Card>
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
