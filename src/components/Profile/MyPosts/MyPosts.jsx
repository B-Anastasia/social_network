import React from "react";
import s from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map(post => <Post message={post.message} likes={post.likes}/>);


    let newText = React.createRef();
    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newText.current.value;
        props.updateNewMessagePost(text);

    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>

            <div>
            <textarea
                ref={newText}
                onChange={onPostChange}
                value={props.newPostMessage}
            />
                <div>
                    <button
                        onClick={onAddPost}
                    >
                        Add post
                    </button>
                </div>
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;
