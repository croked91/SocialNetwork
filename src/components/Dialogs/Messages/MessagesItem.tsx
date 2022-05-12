import s from './../Dialogs.module.css'
import { BrowserRouter, NavLink } from 'react-router-dom'
import { idText } from 'typescript'



type MessagesTypeProps = {
    title: string
    id: number
}


export const Message = (props: MessagesTypeProps) => {
    return (
        <div className={s.message}>
            {props.title}
        </div>
    )
}

