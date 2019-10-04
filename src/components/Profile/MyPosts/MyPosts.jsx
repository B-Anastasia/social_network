import React from "react";
import s from "./MyPosts.module.scss";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewMessagePostActionCreator} from "../../../redux/state";

const MyPosts = (props) => {

    let postsElements = props.state.map(post => <Post message={post.message} likes={post.likes}/>);


    let newText = React.createRef();
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        let text = newText.current.value;
        let action=updateNewMessagePostActionCreator(text);
        props.dispatch(action);
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
