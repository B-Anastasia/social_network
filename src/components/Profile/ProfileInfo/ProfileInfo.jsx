import React from 'react';
import s from './ProfileInfo.module.scss';


const ProfileInfo = (props) => {
    return (
        <div>

            <div className={s.picture}>
                <img alt="nature"
                     src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
            </div>

            <div className={s.descriptionBlock}>
                <img alt='logo_user'
                     src="https://files.adme.ru/files/news/part_101/1017310/19069465-f686ec9a6b0714f716d28ed9692f8e82-1479299993-1000-32e9147584-1479300464.jpg"/>
                <div className={s.user_info}>
                    {props.name}
                </div>
            </div>


        </div>
    );
}

export default ProfileInfo;
