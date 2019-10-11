import React from "react";
import s from "./Dialogs.module.scss";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-reducer";



const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map( dialog => <DialogItem state={dialog}/> );

    let messagesElements = props.state.messages.messagesFriendOne.map( message =>
            <Message message={message.message} id={message.id}/>
        // <Message message={message.messagesFriendTwo.message} id={message.messagesFriendTwo.id}/>

);
    // let messageText = React.createRef();
    let addMessage= () => {
        props.dispatch(addMessageActionCreator());
    }
    let changeTextMessage = (e) =>{
        let text= e.target.value;
        // let text=messageText.current.value;
        props.dispatch(updateNewMessageActionCreator(text));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea
                        placeholder='Write your message here'
                        // ref={messageText}
                        onChange={changeTextMessage}
                        value={props.state.messages.startMessage}
                        cols="15" rows="5"
                    />
                    </div>
                    <div>
                        <button onClick={addMessage}>Push</button>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Dialogs;
