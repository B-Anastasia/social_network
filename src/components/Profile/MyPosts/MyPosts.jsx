import React from "react";
import s from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.state.map(post => <Post message={post.message} likes={post.likes}/>);

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
