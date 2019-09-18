import React from 'react';
import s from "./Navbar.module.scss";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return(
        <nav className={s.nav} >

          <NavLink exact to="/" activeClassName={s.active}>
              Profile
          </NavLink>
          <NavLink to="/dialogs" activeClassName={s.active}> Messages</NavLink>
          <NavLink to="/news" activeClassName={s.active}>News</NavLink>
          <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
          <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>

      </nav>
    );
}

export default Navbar;
