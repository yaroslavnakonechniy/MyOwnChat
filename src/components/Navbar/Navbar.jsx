import React from "react";
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import Friends from "./Friends/Friends";


const Navbar = () => {
    return  <nav className={s.nav}>
    <div className={s.item}>
      <NavLink to='/dialogs' className = { navData => navData.isActive ? s.active : s.item } >Dialogs</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/profile' className = { navData => navData.isActive ? s.active : s.item } >Profile</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/user' className = { navData => navData.isActive ? s.active : s.item } >User</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/messages' className = { navData => navData.isActive ? s.active : s.item } >Messages</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/news' className = { navData => navData.isActive ? s.active : s.item } >News</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/music' className = { navData => navData.isActive ? s.active : s.item } >Music</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/foto' className = { navData => navData.isActive ? s.active : s.item } >Foto</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/wer' className = { navData => navData.isActive ? s.active : s.item } >Wer</NavLink>
    </div>
    <div>
      <Friends />
    </div>


  </nav>
}

export default Navbar;