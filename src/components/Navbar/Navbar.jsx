import React from 'react';
import s from "./Navbar.module.scss";

const Navbar = () => {
    return(
        <nav className={s.nav} >
        <ul>
          <li><a href="/profile">Profile</a></li>
          <li className={s.active}><a  href="/dialogs">Messages</a></li>
          <li><a href="/news">News</a></li>
          <li><a href="/music">Music</a></li>
          <li><a href="/settings">Settings</a></li>
        </ul>
      </nav>
    );
}

export default Navbar;
