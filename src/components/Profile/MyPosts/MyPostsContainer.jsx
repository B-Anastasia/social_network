import React from "react";
import {addPostActionCreator, updateNewMessagePostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    let state=props.store.getState().profilePage;
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let onPostChange = (text) => {
        // let text = newText.current.value;         it is inside MyPosts
        let action=updateNewMessagePostActionCreator(text);
        props.store.dispatch(action);
    }

    return (
        <MyPosts updateNewMessagePost={onPostChange} addPost={addPost} posts={state.posts} newPostMessage={state.newPostMessage}/>
    );
};

export default MyPostsContainer;
