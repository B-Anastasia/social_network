import React from 'react';
import s from "./User.module.scss";

const User = (props) => {
    return (
        <div className={s.user}>
            <div className={s.userFace}>
                <img className={s.userFace_image} src={props.img} alt="User_photo"/>
            </div>
            {props.name}
        </div>
    );
}
export default User;