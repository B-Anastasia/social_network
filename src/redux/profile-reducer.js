const ADD_POST = 'ADD-POST';
const UPDATE_NEW_MESSAGE_POST = 'UPDATE-NEW-MESSAGE-POST';

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: state.newPostMessage,
                likes: 0
            };
            state.posts.push(newPost);
            state.newPostMessage = '';
            return state;
        case UPDATE_NEW_MESSAGE_POST:
            state.newPostMessage = action.addingText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});  //action-creator for profile page
export const updateNewMessagePostActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_POST,
    addingText: text
});
export default profileReducer;

