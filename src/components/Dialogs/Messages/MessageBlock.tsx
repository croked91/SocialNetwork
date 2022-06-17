import React from "react";
import { Message } from "./MessagesItem";

import style from './MessagesBlock.module.css'
import { InputButton } from "./InputButton/InputButton";
import { ActionTypes, MessagesType } from "../../../redux/state";

type MessageBlockType = {
    state: { messages: MessagesType;}
    dispatch: (action: ActionTypes ) => void
}

export const MessageBlock =(props: MessageBlockType)=>{
   
    let newMessagesData = props.state.messages.message.map(message => <Message user={props.state.messages.user} title={message.name} id={message.id} authorId={message.authorId}/>)

    

    return(
        <div className={style.messageBlock}>
            <div className={style.messageArea}>
            {newMessagesData}
            </div>
            <div className={style.inputButton}>
                <InputButton state={props.state} dispatch={props.dispatch} />
            </div>
        </div>
    )
}