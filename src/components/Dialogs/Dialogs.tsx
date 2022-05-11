import s from './Dialogs.module.css'
import { BrowserRouter, NavLink } from 'react-router-dom'

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

let messagesData = [
    { id: 1, name: "Hi" },
    { id: 2, name: "How are you" },
    { id: 3, name: "It's paw paw buggie" },
    { id: 4, name: "It's paw paw buggie" },
    { id: 5, name: "It's paw paw buggie" },
    { id: 6, name: "It's paw paw buggie" },
    { id: 7, name: "It's paw paw buggie " }
]



const Dialogs = (props: ConstTypeProps) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <DialogItem id={dialogsData[0].id} title={dialogsData[0].name} />
                <DialogItem id={dialogsData[1].id} title={dialogsData[1].name} />
                <DialogItem id={dialogsData[2].id} title={dialogsData[2].name} />
                <DialogItem id={dialogsData[3].id} title={dialogsData[3].name} />
                <DialogItem id={dialogsData[4].id} title={dialogsData[4].name} />
                <DialogItem id={dialogsData[5].id} title={dialogsData[5].name} />
                <DialogItem id={dialogsData[6].id} title={dialogsData[6].name} />

            </div>
            <div className={s.messages}>
                <Message title={messagesData[0].name} id={messagesData[0].id}/>
                <Message title={messagesData[1].name} id={messagesData[1].id}/>
                <Message title={messagesData[2].name} id={messagesData[2].id}/>
                <Message title={messagesData[3].name} id={messagesData[3].id}/>
                <Message title={messagesData[4].name} id={messagesData[4].id}/>
                <Message title={messagesData[5].name} id={messagesData[5].id}/>
                <Message title={messagesData[6].name} id={messagesData[6].id}/>
            </div>
        </div>
    )
}

export default Dialogs 