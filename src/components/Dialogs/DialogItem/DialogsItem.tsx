import s from './../Dialogs.module.css'
import { BrowserRouter, NavLink } from 'react-router-dom'

type DialogsTypeProps = {
    title: string
    id: number
    avaSourse: string
}

export const DialogItem = (props: DialogsTypeProps) => {

    var path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + ' ' + s.pp}>
            <img className={s.img} src={props.avaSourse} />
            <NavLink to={path}>{props.title}</NavLink>
        </div>
    )
}


