import React from "react";
import s from "./Dialogs.module.scss";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let state=props.dialogsPage;

    let dialogsElements = state.dialogs.map( dialog => <DialogItem state={dialog}/> );

    let messagesElements = state.messages.messagesFriendOne.map( message =>
            <Message message={message.message} id={message.id}/>
        // <Message message={message.messagesFriendTwo.message} id={message.messagesFriendTwo.id}/>
    );
    let addMessageText= () => {
        props.addMessage();
    }
    let changeText = (e) =>{
        let text= e.target.value;
        props.changeTextMessage(text);
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
                        onChange={changeText}
                        value={state.messages.startMessage}
                        cols="15" rows="5"
                    />
                    </div>
                    <div>
                        <button onClick={addMessageText}>Push</button>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Dialogs;
