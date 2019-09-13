import React from 'react';
import s from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea name="" id="" cols="30" rows="10">New post</textarea>
                <button>Add post</button>
            </div>
            <div  className={s.posts}>
            <Post message="Hi, this is my first post!" likes="15" />
            <Post message="I like React" likes="20"/>
           
            </div>
        </div>
    );
}

export default MyPosts;
