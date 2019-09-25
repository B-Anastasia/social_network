import React from "react";
import s from "./Dialogs.module.scss";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map( dialog => <DialogItem state={dialog}/> );

    let messagesElements = props.state.messages.messagesFriendOne.map( message =>
            <Message message={message.message} id={message.id}/>
        // <Message message={message.messagesFriendTwo.message} id={message.messagesFriendTwo.id}/>

);
    let messageText = React.createRef();
    let addMessage= () => {
        let text=messageText.current.value;
        alert(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.newMessage}> <textarea ref={messageText} name="newMessage" cols="5" rows="5"></textarea>
                <button onClick={addMessage}>Push</button></div>
            </div>


        </div>
    );
}

export default Dialogs;
