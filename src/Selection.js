import {Link} from "react-router-dom";
import React from "react";
import Card from "./Card";
import  classes from './Selection.module.css'
import Nav from './Nav';
const Selection = () => {
  return (
    <div className={classes['container']}>
      <header className={classes['header']}>
        <div className={classes['icon__left']}>
          <div className={classes['menu_bar']}>
          <img src="https://iili.io/mP1WT7.png"/>
          </div>
          <div className={classes['logo']}>
          <img src="https://i.postimg.cc/jqwyNVN1/logo-transparent.png"/>
          </div>
        </div>
        <div className={classes['text__center']}>
        <h1 className={classes['welcome']}> Welcome!</h1>
        <h1 className={classes['see_you']}>It’s really nice to see you</h1>
        </div>
      </header>
      <main className={classes['main']}>
          <div className={classes['title']}>I Am A</div>
        <div className={classes['selection__contain']}>
          <div className={classes['avatar']}>
            <Card>
              <img src="https://iili.io/mP1yZX.png" alt="avatar"></img>
            <Nav to="/teacher">Teacher</Nav>
            </Card>
            <Card>
              <img src="https://iili.io/mP0uWu.png" alt="avatar"></img>
            <Nav to="/student">Student</Nav>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Selection;
