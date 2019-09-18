import React from "react";
import s from "./Dialogs.module.scss";
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
          <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <NavLink to='/dialogs/1'  activeClassName={s.active} className={s.dialog}>
                    Andrey
                </NavLink>
                <NavLink to={"/dialogs/2"}  activeClassName={s.active} className={s.dialog}>
                    Anastasia
                </NavLink>
                <NavLink to={"/dialogs/3"}  activeClassName={s.active} className={s.dialog}>
                    Anastasia
                </NavLink>
                <NavLink to={"/dialogs/4"}  activeClassName={s.active} className={s.dialog}>
                    Anastasia
                </NavLink>
                <NavLink to={"/dialogs/5"}  activeClassName={s.active} className={s.dialog}>
                    Anastasia
                </NavLink>
                <NavLink to={"/dialogs/6"}  activeClassName={s.active} className={s.dialog}>
                    Anastasia
                </NavLink>
                <NavLink to={"/dialogs/7"}  activeClassName={s.active} className={s.dialog}>
                    Anastasia
                </NavLink>
                <NavLink to={"/dialogs/8"}  activeClassName={s.active} className={s.dialog}>
                    Anastasia
                </NavLink>
                <NavLink to={"/dialogs/9"}  activeClassName={s.active} className={s.dialog}>
                    Vladimir
                </NavLink>
            </div>
          <div className={s.messages}>
            <div className={s.message}>Hi</div>
            <div className={s.message}>How are you?</div>
            <div className={s.message}>I want to be the best React developer</div>
          </div>
        </div>
    );
}

export default Dialogs;
