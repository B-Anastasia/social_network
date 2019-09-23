import React from "react";
import s from "./DialogItem.module.scss";
import {NavLink} from "react-router-dom";
import User from "../../User/User";


    const DialogItem = (props) => {
        console.log(props);
        let path = '/dialogs/' + props.state.id;

        return (
            <NavLink to={path} activeClassName={s.active} className={s.dialog}>
                <User img={props.state.img} name={props.state.name} />
            </NavLink>
        );
    }



export default DialogItem;
