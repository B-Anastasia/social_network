import React from "react";
import s from "./Dialogs.module.scss";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = () => {




    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <DialogItem name="Andrey" id="1"/>
                <DialogItem name="Viktor" id="2"/>
                <DialogItem name="Katerina" id="3"/>
                <DialogItem name="Tanya" id="4"/>
                <DialogItem name="Anastasia" id="5"/>
                <DialogItem name="Alisa" id="6"/>
                <DialogItem name="Ludmila" id="7"/>
                <DialogItem name="Sergey" id="8"/>

            </div>
            <div className={s.messages}>

                <Message message="Hi"/>
                <Message message="How are you?"/>
                <Message message="This is a good start!"/>
                <Message message="Yo"/>
                <Message message="I like you!"/>
                <Message message="Hi!"/>

            </div>
        </div>
    );
}

export default Dialogs;
