import React from 'react';
import s from './Profile.module.scss';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {



    return (
        <div className={s.content}>

            <ProfileInfo name="Anastasia B."/>

            <MyPosts state={props.state.posts}/>

        </div>
    );
}

export default Profile;
