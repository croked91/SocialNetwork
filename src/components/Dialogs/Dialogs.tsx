import s from './Dialogs.module.css'
import { DialogItem } from './DialogItem/DialogsItem'
import { Message } from './Messages/MessagesItem'
import { DialogType, MessageType } from '../../App'

type ConstTypeProps = {
    title: string
    state: { dialogs: DialogType[]; messages: MessageType[]; }
}


const Dialogs = (props: ConstTypeProps) => {
    
    let newDialogsData = props.state.dialogs.map(dialog => <DialogItem id={dialog.id} title={dialog.name} />)
    let newMessagesData = props.state.messages.map(message => <Message title={message.name} id={message.id} />)
    
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