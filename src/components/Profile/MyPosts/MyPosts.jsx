import React from "react";
import s from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements = props.state.map(post => <Post message={post.message} likes={post.likes}/>);


    let newText = React.createRef();
    let addPost = () => {
        // debugger;
        let text = newText.current.value;
        props.addPost(text);
        props.updateMessagePost('');
    };

    let onPostChange = () => {
        let text = newText.current.value;
        props.updateMessagePost(text);
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
                        onClick={addPost}
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
