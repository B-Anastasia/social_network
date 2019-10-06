const ADD_POST = 'ADD-POST';                     //action-type
const ADD_MESSAGE = 'ADD-MESSAGE';                     //action-type
const UPDATE_NEW_MESSAGE_POST = 'UPDATE-NEW-MESSAGE-POST';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';


let store = {
    _state: {

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
                startMessage: '',
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
    },
    _callSubscriber(){
        console.log("State was changed");
    },

    getState(){
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer;   //observer
    },

    dispatch(action){
        let state= this._state;
        if( action.type === ADD_POST ){
            let newPost= {
                id: 3,
                message: state.profilePage.newPostMessage,
                likes: 0
            };
            state.profilePage.posts.push(newPost);
            state.profilePage.newPostMessage='';
            this._callSubscriber(state);
        } else if ( action.type === UPDATE_NEW_MESSAGE_POST ){
            state.profilePage.newPostMessage = action.addingText;
            this._callSubscriber(state);
        } else if ( action.type === ADD_MESSAGE ) {
            let newMessage = {
                id: 7,
                message: state.dialogsPage.messages.startMessage,
            };
            state.dialogsPage.messages.startMessage ='';
            state.dialogsPage.messages.messagesFriendOne.push(newMessage);
            this._callSubscriber(state);
        } else if ( action.type === UPDATE_NEW_MESSAGE ) {
            state.dialogsPage.messages.startMessage = action.addingText;
            this._callSubscriber(state);
        }
    }

}
export const addPostActionCreator = () => ({ type: ADD_POST });  //action-creator for profile page
export const updateNewMessagePostActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_POST,
    addingText: text
});
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE});  //action-creator for dialogs page
export const updateNewMessageActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE,
    addingText: text
});


export default store;
window.store=store;
// let rerenderEntireTree= () =>{
//     console.log("State was changed");
// }

// let state = {
//
//     profilePage: {
//         posts: [
//             {id: 1, message: 'Hi, this is my first post!', likes: "15"},
//             {id: 2, message: 'I like React', likes: "20"}
//         ],
//         newPostMessage: 'New post'
//     },
//     dialogsPage: {
//         dialogs: [
//             {id:1, name:'Andrey', img:"/img/users/user_1.jpg"},
//             {id:2, name:'Viktor', img:"/img/users/user_2.jpg"},
//             {id:3, name:'Katerina', img:"/img/users/user_3.jpg"},
//             {id:4, name:'Tanya', img:"/img/users/user_4.jpg"},
//             {id:5, name:'Anastasia', img:"/img/users/user_5.jpg"},
//             {id:6, name:'Alisa', img:"/img/users/user_6.jpg"},
//             {id:7, name:'Ludmila', img:"/img/users/user_7.jpg"},
//             {id:8, name:'Sergey', img:"/img/users/user_8.jpg"}
//         ],
//         messages:{
//             messagesFriendOne: [
//                 {id:1, message:'Hi'},
//                 {id:2, message:'How are you?'},
//                 {id:3, message:'This is a good start!'},
//                 {id:4, message:'Yo'},
//                 {id:5, message:'I like you!'},
//                 {id:6, message:'Buy!'}
//             ],
//             messagesFriendTwo: [
//                 {id:1, message:'Yo!'},
//                 {id:2, message:'Fine, how are you?'},
//                 {id:3, message:'Great!'},
//                 {id:4, message:'Yo'},
//                 {id:5, message:'I like you too!'},
//                 {id:6, message:'Buy!'}
//         ]
//         }
//     },
//     navbar: [
//         {id:2, path: "/dialogs", name: "Messages" },
//         {id:3, path: "/news", name: "News" },
//         {id:4, path: "/music", name: "Music" },
//         {id:5, path: "/settings", name: "Settings" },
//         {id:5, path: "/friends", name: "Friends" },
//     ]
// }
// window.state=state;

// export const addPost = () => {
//     let newPost= {
//         id: 3,
//         message: state.profilePage.newPostMessage,
//         likes: 0
//     };
//     state.profilePage.posts.push(newPost);
//     state.profilePage.newPostMessage='';
//     rerenderEntireTree(state);
// }

// export const updateMessagePost = (newText) => {
//     state.profilePage.newPostMessage = newText;
//     rerenderEntireTree(state);
// }

// export const subscribe = (observer) => {
// rerenderEntireTree=observer;  //pattern - observer
// }

//
// addPost(){
//     let state= this._state;
//     let newPost= {
//         id: 3,
//         message: state.profilePage.newPostMessage,
//         likes: 0
//     };
//     state.profilePage.posts.push(newPost);
//     state.profilePage.newPostMessage='';
//     this._callSubscriber(state);
// },
// updateMessagePost(newText){
//     let state= this._state;
//     state.profilePage.newPostMessage = newText;
//     this._callSubscriber(state);
// },

// export default state;