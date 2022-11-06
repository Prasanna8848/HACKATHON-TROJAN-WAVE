import React from 'react'
import {Link} from 'react-router-dom'
const Nav = (props) => {
  return (
    <Link className={props.className} to={props.children}> {props.children}</Link>
  )
}

export default Nav