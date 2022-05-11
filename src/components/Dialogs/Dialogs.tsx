import s from './Dialogs.module.css'
import { BrowserRouter, NavLink } from 'react-router-dom'
import { idText } from 'typescript'

type DialogsTypeProps = {
    title: string
    id: number
}

type MessagesTypeProps = {
    title: string
    id: number
}
type ConstTypeProps = {
    title: string
}

const DialogItem = (props: DialogsTypeProps) => {

    var path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + ' ' + s.pp}>
            <NavLink to={path}>{props.title}</NavLink>
        </div>
    )
}


const Message = (props: MessagesTypeProps) => {
    return (
        <div className={s.message}>
            {props.title}
        </div>
    )
}

let dialogsData = [
    { id: 1, name: "Egor" },
    { id: 2, name: "Kolya" },
    { id: 3, name: "Kuprovskiy" },
    { id: 4, name: "Albina" },
    { id: 5, name: "Tolyan" },
    { id: 6, name: "MehmetIbnAbdul" },
    { id: 7, name: "Viktor " }
]

let newDialogsData = dialogsData.map(name => <DialogItem key={name.id.toString()} id={name.id} title={name.name} />)


let messagesData = [
    { id: 1, name: "Hi" },
    { id: 2, name: "How are you" },
    { id: 3, name: "It's paw paw buggie" },
    { id: 4, name: "It's paw paw buggie" },
    { id: 5, name: "It's paw paw buggie" },
    { id: 6, name: "It's paw paw buggie" },
    { id: 7, name: "It's paw paw buggie " }
]

let newMessagesData = messagesData.map(message => <Message key={message.id.toString()} title={message.name} id={message.id} />)

const Dialogs = (props: ConstTypeProps) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {newDialogsData}
            </div>
            <div className={s.messages}>
                {newMessagesData}
            </div>
        </div>
    )
}

export default Dialogs 