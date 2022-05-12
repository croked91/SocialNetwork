import s from './Dialogs.module.css'
import { DialogItem } from './DialogItem/DialogsItem'
import { Message } from './Messages/MessagesItem'

type ConstTypeProps = {
    title: string
    newMessagesData: object
    newDialogsData: object
}

const Dialogs = (props: ConstTypeProps) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {props.newDialogsData}
            </div>
            <div className={s.messages}>
                {props.newMessagesData}
            </div>
        </div>
    )
}

export default Dialogs 