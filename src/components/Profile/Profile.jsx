import React from 'react';
import s from './Profile.module.scss';
import MyPosts from './MyPosts/MyPosts';


const Profile = () => {
    return(
        <div className={s.content}  >
        <div className={s.picture}>
        <img src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        </div>
        <div className={s.user}>
          <img src="https://files.adme.ru/files/news/part_101/1017310/19069465-f686ec9a6b0714f716d28ed9692f8e82-1479299993-1000-32e9147584-1479300464.jpg"/>
          <div className={s.user_info}>
            Anastasia B.
            
          </div>
        </div>
        <MyPosts />
      </div>
    );
}

export default Profile;
