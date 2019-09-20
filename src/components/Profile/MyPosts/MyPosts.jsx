import React from "react";
import s from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = () => {

    let postsData = [
        {id: 1, message: 'Hi, this is my first post!', likes: "15"},
        {id: 2, message: 'I like React', likes: "20"}
    ];

    let postsElements = postsData.map(post => <Post message={post.message} likes={post.likes}/>);

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>

            <div>
          <textarea name="" id="" cols="30" rows="5">
          New post
        </textarea>
                <div>
                    <button>Add post</button>
                </div>
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;
