import React from "react";
import { Message } from "./MessagesItem";

import style from './MessagesBlock.module.css'
import { InputButton } from "./InputButton/InputButton";
import { MessagesType } from "../../../redux/store";
import { DialogsActionTypes } from "../../../redux/dialogsReducer";

type MessageBlockType = {
    state: { messages: MessagesType;}
}

export const MessageBlock =(props: MessageBlockType)=>{
   
    let newMessagesData = props.state.messages.message.map(message => <Message user={props.state.messages.user} title={message.name} id={message.id} authorId={message.authorId}/>)

    

    return(
        <div className={style.messageBlock}>
            <div className={style.messageArea}>
            {newMessagesData}
            </div>
            <div className={style.inputButton}>
                <InputButton state={props.state} />
            </div>
        </div>
    )
}