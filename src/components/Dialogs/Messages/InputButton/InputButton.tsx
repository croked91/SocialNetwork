import React from "react";
import { ActionTypes, addNewMessageBodyAC, MessagesType, sendMessageAC } from "../../../../redux/state";




type InputButtonType = {
    state: { messages: MessagesType;}
    dispatch: (action: ActionTypes ) => void
}

export const InputButton = (props: InputButtonType) => {


    let sendMessagesOnClick = () => {
        props.dispatch(sendMessageAC())
    }

    let updateNewMessageHandler = (newText: string) => {
        let action = addNewMessageBodyAC(newText)
        props.dispatch(action)      
    }

    let newMessagesBody = props.state.messages.newMessageBody

    return (
        <div>
            <input
            value={newMessagesBody} 
            onChange={(e)=>updateNewMessageHandler(e.currentTarget.value)} 
            placeholder="Enter your message"
            />
            <img onClick={sendMessagesOnClick} src="https://cdn-icons-png.flaticon.com/512/724/724954.png" />
        </div>
    )
}