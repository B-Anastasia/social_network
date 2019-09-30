import React from 'react';
import s from './Profile.module.scss';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
// debugger;


    return (
        <div className={s.content}>

            <ProfileInfo
                name="Anastasia B."
            />

            <MyPosts
                state={props.profilePage.posts}
                newPostMessage={props.profilePage.newPostMessage}
                addPost={props.addPost}
                updateMessagePost={props.updateMessagePost}
            />

        </div>
    );
}

export default Profile;
