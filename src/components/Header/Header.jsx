import React from "react";
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';


const Header = (props) => {
    return   <header className={s.header}>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjxEK0qKNCg2SbI1oM-tftPqqwwHmbX6T-eg&usqp=CAU"></img>

    <div className={s.login}>
      {props.isAuth ? props.login : <NavLink to='/login'>Login</NavLink> } 
      
    </div>
  </header>
}

export default Header;