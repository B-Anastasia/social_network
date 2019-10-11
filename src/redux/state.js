import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";

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
                {id: 1, name: 'Andrey', img: "/img/users/user_1.jpg"},
                {id: 2, name: 'Viktor', img: "/img/users/user_2.jpg"},
                {id: 3, name: 'Katerina', img: "/img/users/user_3.jpg"},
                {id: 4, name: 'Tanya', img: "/img/users/user_4.jpg"},
                {id: 5, name: 'Anastasia', img: "/img/users/user_5.jpg"},
                {id: 6, name: 'Alisa', img: "/img/users/user_6.jpg"},
                {id: 7, name: 'Ludmila', img: "/img/users/user_7.jpg"},
                {id: 8, name: 'Sergey', img: "/img/users/user_8.jpg"}
            ],
            messages: {
                startMessage: '',
                messagesFriendOne: [
                    {id: 1, message: 'Hi'},
                    {id: 2, message: 'How are you?'},
                    {id: 3, message: 'This is a good start!'},
                    {id: 4, message: 'Yo'},
                    {id: 5, message: 'I like you!'},
                    {id: 6, message: 'Buy!'}
                ],
                messagesFriendTwo: [
                    {id: 1, message: 'Yo!'},
                    {id: 2, message: 'Fine, how are you?'},
                    {id: 3, message: 'Great!'},
                    {id: 4, message: 'Yo'},
                    {id: 5, message: 'I like you too!'},
                    {id: 6, message: 'Buy!'}
                ]
            }
        },
        navbar: [
            {id: 2, path: "/dialogs", name: "Messages"},
            {id: 3, path: "/news", name: "News"},
            {id: 4, path: "/music", name: "Music"},
            {id: 5, path: "/settings", name: "Settings"},
            {id: 5, path: "/friends", name: "Friends"},
        ]
    },
    _callSubscriber() {
        console.log("State was changed");
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;   //observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.navbar = navbarReducer(this._state.navbar, action);

        this._callSubscriber(this._state);
    }
}
export default store;
window.store = store;
