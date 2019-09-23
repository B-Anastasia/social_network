import React from 'react';
import s from "./Navbar.module.scss";
import {NavLink} from "react-router-dom";
import User from "../User/User";

const Navbar = (props) => {
    let linkName = props.state.map(link => <NavLink to={link.path} activeClassName={s.active}>{link.name}</NavLink>);
    let friends = props.user.map( user =>  <User img={user.img} name={user.name} /> );
    return(
        <nav className={s.nav} >

          <NavLink exact to="/" activeClassName={s.active}>
              Profile
          </NavLink>
            {linkName}
            {friends}
      </nav>
    );
}

export default Navbar;
