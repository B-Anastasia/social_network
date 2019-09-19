import React from 'react';
import s from './Profile.module.scss';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = () => {
    return (
        <div className={s.content}>

            <ProfileInfo name="Anastasia B."/>

            <MyPosts/>

        </div>
    );
}

export default Profile;
