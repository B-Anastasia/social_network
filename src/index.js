import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogsData=[
    {id:1, name:'Andrey'},
    {id:2, name:'Viktor'},
    {id:3, name:'Katerina'},
    {id:4, name:'Tanya'},
    {id:5, name:'Anastasia'},
    {id:6, name:'Alisa'},
    {id:7, name:'Ludmila'},
    {id:8, name:'Sergey'}
];


let messagesData=[
    {id:1, message:'Hi'},
    {id:2, message:'How are you?'},
    {id:3, message:'This is a good start!'},
    {id:4, message:'Yo'},
    {id:5, message:'I like you!'},
    {id:6, message:'Hi!'}
];

let postsData = [
    {id: 1, message: 'Hi, this is my first post!', likes: "15"},
    {id: 2, message: 'I like React', likes: "20"}
];

ReactDOM.render(<App p={postsData} m={messagesData} d={dialogsData}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
