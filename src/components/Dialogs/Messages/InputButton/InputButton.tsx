import React, {ChangeEvent} from "react";
import { DialogsActionTypes, addNewMessageBodyAC, sendMessageAC } from "../../../../redux/dialogsReducer";
import {MessagesType} from "../../../../redux/state";




type InputButtonType = {
    state: { messages: MessagesType;}
    dispatch: (action: DialogsActionTypes ) => void
}

export const InputButton = (props: InputButtonType) => {


    let sendMessagesOnClick = () => {
        props.dispatch(sendMessageAC())
    }

    let updateNewMessageHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let action = addNewMessageBodyAC(e.currentTarget.value)
        props.dispatch(action)      
    }

    let newMessagesBody = props.state.messages.newMessageBody

    return (
        <div>
            <input
            value={newMessagesBody} 
            onChange={updateNewMessageHandler} 
            placeholder="Enter your message"
            />
            <img onClick={sendMessagesOnClick} src="https://cdn-icons-png.flaticon.com/512/724/724954.png" />
        </div>
    )
}