const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let initialState = {
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
}

const dialogsReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 7,
                message: state.messages.startMessage,
            };
            state.messages.startMessage = '';
            state.messages.messagesFriendOne.push(newMessage);
            return state;
        case UPDATE_NEW_MESSAGE:
            state.messages.startMessage = action.addingText;
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});  //action-creator for dialogs page
export const updateNewMessageActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE,
    addingText: text
});

export default dialogsReducer;