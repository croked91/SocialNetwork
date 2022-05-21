import s from './../Dialogs.module.css'
import { BrowserRouter, NavLink } from 'react-router-dom'
import { idText } from 'typescript'
import { InputButton } from './InputButton/InputButton'



type MessagesTypeProps = {
    title: string
    id: number
    authorId: number
    user: string
}


export const Message = (props: MessagesTypeProps) => {
    if (props.authorId === 1)
    return (
       <div className={s.messages}>
       <div className={s.outgoingMessage}>
            {props.title}
        </div>
        </div>
    )
    return (
        <div className={s.messages}>
        <div className={s.incomingMessage}>
            {props.title}
        </div>
        </div>
    )
}

