import React from "react";
import s from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements = props.state.map(post => <Post message={post.message} likes={post.likes}/>);


    let newText = React.createRef();
    let addPost = () => {
        debugger;
        let text=newText.current.value;
        props.addPost(text);
        newText.current.value= '';
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>

            <div>
            <textarea ref={newText} cols="30" rows="5">
          New post
        </textarea>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;
