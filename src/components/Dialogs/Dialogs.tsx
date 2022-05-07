import s from './Dialogs.module.css'
import { BrowserRouter, NavLink } from 'react-router-dom'

type DialogsTypeProps = {
    title: string
    id: number
}

type MessagesTypeProps = {
    title: string
}

const DialogItem: React.FC<DialogsTypeProps> = (props) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + ' ' + s.pp}>
            <NavLink to={path}>{props.title}</NavLink>
        </div>
    )
}


const Message: React.FC<MessagesTypeProps> = (props) => {
    return (
        <div className={s.message}>
            {props.title}
        </div>
    )
}

const Dialogs: React.FC<MessagesTypeProps> = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <DialogItem id={1} title="Egor" />
                <DialogItem id={2} title="Kolya" />
                <DialogItem id={3} title="Kuprovskiy" />
                <DialogItem id={4} title="Albina" />
                <DialogItem id={5} title="Tolyan" />
                <DialogItem id={6} title="MehmetIbnAbdul" />
                <DialogItem id={7} title="Viktor" />
            </div>
            <div className={s.messages}>
                <Message title="Hi" />
                <Message title="How are you" />
                <Message title="It's paw paw buggie" />
                <Message title="It's paw paw buggie" />
                <Message title="It's paw paw buggie" />
            </div>
        </div>
    )
}

export default Dialogs 