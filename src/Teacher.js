import React from "react";
import classes from  './Student.module.css'
import Nav from './Nav'
const TeacherForm = () => {
  return (
    <div className={classes['container']}>
      <div className={classes['icon__left']}>
          <div className={classes['menu_bar']}>
          <img src="https://iili.io/mP1WT7.png"/>
          </div>
          <div className={classes['logo']}>
          <img src="https://i.postimg.cc/jqwyNVN1/logo-transparent.png"/>
          </div>
        </div>

      <div className={classes['title']}>
      <h2 style={{fontWeight:'500'}}>Welcome <span style={{color:'red'}}>Teacher!</span></h2>
      </div>
      <div className={classes['container__inside']}>
          <div className={classes['container__left']}>
          <div className={classes['teacher']}>
          <img src="https://iili.io/mP1yZX.png"/>
          </div>
            <div className={classes['checklist']}>
            <img src="https://iili.io/mP0fff.png"/>
            </div>
          </div>
          <div className={classes['container__right']}>
            <h3 style={{marginLeft:'0px', fontWeight:'400'}}> Kindly Fillout Your Details </h3>
            <form className={classes['form']}>
            <div className="name">
                <input placeholder="Your name here"></input>
            </div>
            <div className="university">
                <input placeholder="Select Your Univeristy"></input>
            </div>
            <div className="semester">
                <input placeholder="Select Your Semester"></input>
            </div>
            <div className="phone">
                <input placeholder="Enter Your Phone Number"></input>
            </div>
            <div className="email">
                <input placeholder="Your e-mail here"></input>
            </div>
            <div className="subjects">
                <input placeholder="Select subjects wish to teach"></input>
            </div>
        </form>
            <div className={classes['checkbox']}>
            <input type="checkbox" style={{fontSize:'1.3 rem'}} /> 
            <span>I have read and agree <span style={{color:'blue'}}> to all Terms & conditions </span> </span>            
            </div>
          <Nav className={classes['join-now']} to='/join' >Join Now</Nav>
          </div>
          
      </div>
      
    </div>
  );
};

export default TeacherForm;
