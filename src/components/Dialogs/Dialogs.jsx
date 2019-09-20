import React from "react";
import s from "./Dialogs.module.scss";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

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

    let dialogsElements = dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/> );

    let messagesElements = messagesData.map( message => <Message message={message.message} id={message.id}/>  );



    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;
