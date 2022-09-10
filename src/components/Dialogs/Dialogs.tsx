import s from './Dialogs.module.css'
import { DialogItem } from './DialogItem/DialogsItem'
import { DialogType, MessagesType } from '../../redux/types'
import { MessageBlock } from './Messages/MessageBlock'


type ConstTypeProps = {
    title: string
    state: { dialogs: DialogType[]; messages: MessagesType;}
}


const Dialogs = (props: ConstTypeProps) => {
    
    let newDialogsData = props.state.dialogs.map(dialog => <DialogItem avaSourse={dialog.avaSourse} id={dialog.id} title={dialog.name} />)
    
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {newDialogsData}
            </div>
            <div className={s.messages}>
                <MessageBlock state={props.state}/>
            </div> 
        </div>
    )
}

export default Dialogs 