import s from './../Dialogs.module.css'
import { BrowserRouter, NavLink } from 'react-router-dom'
import { idText } from 'typescript'

type DialogsTypeProps = {
    title: string
    id: number
}

export const DialogItem = (props: DialogsTypeProps) => {

    var path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + ' ' + s.pp}>
            <NavLink to={path}>{props.title}</NavLink>
        </div>
    )
}


