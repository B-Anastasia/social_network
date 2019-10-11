const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';
const dialogsReducer = (state, action) => {
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