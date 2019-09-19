import React from "react";
import s from "./DialogItem.module.scss";
import {NavLink} from "react-router-dom";


    const DialogItem = (props) => {
        let path = '/dialogs/' + props.id;

        return (
            <NavLink to={path} activeClassName={s.active} className={s.dialog}>
                {props.name}
            </NavLink>
        );
    }



export default DialogItem;
