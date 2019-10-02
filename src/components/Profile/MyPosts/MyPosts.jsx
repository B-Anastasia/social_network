import React from "react";
import s from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements = props.state.map(post => <Post message={post.message} likes={post.likes}/>);


    let newText = React.createRef();
    let addPost = () => {
        // props.addPost();
        props.dispatch({ type: 'ADD-POST' });
    };

    let onPostChange = () => { debugger;
        let text = newText.current.value;

        let action = {
            type: 'UPDATE-NEW-MESSAGE-POST',
            addingText: text
        };
        props.dispatch(action);
        // props.updateMessagePost(text);
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
