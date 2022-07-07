import React, {ChangeEvent} from "react";
import { useDispatch } from "react-redux";
import { DialogsActionTypes, addNewMessageBodyAC, sendMessageAC } from "../../../../redux/dialogsReducer";
import {MessagesType} from "../../../../redux/store";




type InputButtonType = {
    state: { messages: MessagesType;}
}

export const InputButton = (props: InputButtonType) => {
    const dispatch = useDispatch()

    let sendMessagesOnClick = () => {
        dispatch(sendMessageAC())
    }

    let updateNewMessageHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let action = addNewMessageBodyAC(e.currentTarget.value)
        dispatch(action)      
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