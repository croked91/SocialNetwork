import { ActionTypes, DialogType, MessagesType } from "./state";
export type DialogsActionTypes =  ReturnType<typeof addNewMessageBodyAC> | ReturnType<typeof sendMessageAC>



const ADD_NEW_MESSGES_BODY = "UPDATE_NEW_MESSGES_BODY"
const SEND_MESSAGE = "SEND_MESSAGE"

type DialogsReducerStateType = {
    dialogs: DialogType[];
    messages: MessagesType;
  }

export const dialogsReducer = (state: DialogsReducerStateType, action: ActionTypes) => {
    switch(action.type){
        case ADD_NEW_MESSGES_BODY:
            state.messages.newMessageBody = action.newText
            return state;
        case SEND_MESSAGE:
            let newMessage = {
                id: 7,
                name: state.messages.newMessageBody,
                authorId: 1}        
                state.messages.newMessageBody = ""  
                state.messages.message.push(newMessage)
            return state;
        default:
            return state;
    }
}



export const addNewMessageBodyAC = ( newText: string) => ({ 
    type: ADD_NEW_MESSGES_BODY, 
    newText: newText
    } as const)
  
  
  
export const sendMessageAC = () => ({ type: SEND_MESSAGE} as const)
