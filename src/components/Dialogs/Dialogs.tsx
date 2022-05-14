import s from './Dialogs.module.css'
import { DialogItem } from './DialogItem/DialogsItem'
import { Message } from './Messages/MessagesItem'
import { DialogType, MessageType, MessagesType } from '../../App'

type ConstTypeProps = {
    title: string
    state: { dialogs: DialogType[]; messages: MessagesType;}
}


const Dialogs = (props: ConstTypeProps) => {
    
    let newDialogsData = props.state.dialogs.map(dialog => <DialogItem avaSourse={dialog.avaSourse} id={dialog.id} title={dialog.name} />)
    let newMessagesData = props.state.messages.message.map(message => <Message user={props.state.messages.user} title={message.name} id={message.id} authorId={message.authorId}/>)
    
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