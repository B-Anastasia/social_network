
import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import {addPost, updateMessagePost} from "./redux/state";


export let rerenderEntireTree= (state) => {
    ReactDOM.render( <App state={state} addPost={addPost} updateMessagePost={updateMessagePost} />, document.getElementById('root'));
}