import {rerenderEntireTree} from "../render";

// let rerenderEntireTree= () =>{
//     console.log("State was changed");
// }


let state = {

    profilePage: {
        posts: [
            {id: 1, message: 'Hi, this is my first post!', likes: "15"},
            {id: 2, message: 'I like React', likes: "20"}
        ],
        newPostMessage: 'New post'
    },
    dialogsPage: {
        dialogs: [
            {id:1, name:'Andrey', img:"/img/users/user_1.jpg"},
            {id:2, name:'Viktor', img:"/img/users/user_2.jpg"},
            {id:3, name:'Katerina', img:"/img/users/user_3.jpg"},
            {id:4, name:'Tanya', img:"/img/users/user_4.jpg"},
            {id:5, name:'Anastasia', img:"/img/users/user_5.jpg"},
            {id:6, name:'Alisa', img:"/img/users/user_6.jpg"},
            {id:7, name:'Ludmila', img:"/img/users/user_7.jpg"},
            {id:8, name:'Sergey', img:"/img/users/user_8.jpg"}
        ],
        messages:{
            messagesFriendOne: [
                {id:1, message:'Hi'},
                {id:2, message:'How are you?'},
                {id:3, message:'This is a good start!'},
                {id:4, message:'Yo'},
                {id:5, message:'I like you!'},
                {id:6, message:'Buy!'}
            ],
            messagesFriendTwo: [
                {id:1, message:'Yo!'},
                {id:2, message:'Fine, how are you?'},
                {id:3, message:'Great!'},
                {id:4, message:'Yo'},
                {id:5, message:'I like you too!'},
                {id:6, message:'Buy!'}
        ]
        }
    },
    navbar: [
        {id:2, path: "/dialogs", name: "Messages" },
        {id:3, path: "/news", name: "News" },
        {id:4, path: "/music", name: "Music" },
        {id:5, path: "/settings", name: "Settings" },
        {id:5, path: "/friends", name: "Friends" },
    ]
}
window.state=state;

export let addPost = (postMessage) => {
    // debugger;
    let newPost= {
        id: 3,
        message: state.profilePage.newPostMessage,
        likes: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostMessage='';
    rerenderEntireTree(state);
}
export let updateMessagePost = (newText) => {
    state.profilePage.newPostMessage = newText;
    rerenderEntireTree(state);
}

export default state;