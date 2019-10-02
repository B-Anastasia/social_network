import React from 'react';
import ReactDOM from "react-dom";
import './index.scss';
import * as serviceWorker from './serviceWorker';
import store from "./redux/state";
import App from "./App";
// import {addPost, updateMessagePost} from "./redux/state";


 let rerenderEntireTree= (state) => {
    ReactDOM.render( <App state={state} addPost={store.addPost.bind(store)} updateMessagePost={store.updateMessagePost.bind(store)}/>, document.getElementById('root'));
}
rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
