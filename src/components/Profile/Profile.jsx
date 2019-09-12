import React from 'react';
import styles from './Profile.module.scss';


const Profile = () => {
    return(
        <div className={styles.content}  >
        <div className={styles.picture}>
        <img src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        </div>
        <div className={styles.user}>
          <img src="https://files.adme.ru/files/news/part_101/1017310/19069465-f686ec9a6b0714f716d28ed9692f8e82-1479299993-1000-32e9147584-1479300464.jpg"/>
          <div className={styles.user_info}>
            Anastasia B.
            
          </div>
        </div>
        <div>
          My posts
          <div>
            New post
          </div>
          <div>Post1</div>
          <div>Post2</div>
        </div>
      </div>
    );
}

export default Profile;
