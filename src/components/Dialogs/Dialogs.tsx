import s from './Dialogs.module.css'
import { DialogItem } from './DialogItem/DialogsItem'
import { ActionTypes, DialogType, MessagesType } from '../../redux/state'
import { MessageBlock } from './Messages/MessageBlock'


type ConstTypeProps = {
    title: string
    state: { dialogs: DialogType[]; messages: MessagesType;}
    dispatch: (action: ActionTypes ) => void
}


const Dialogs = (props: ConstTypeProps) => {
    
    let newDialogsData = props.state.dialogs.map(dialog => <DialogItem avaSourse={dialog.avaSourse} id={dialog.id} title={dialog.name} />)
    
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {newDialogsData}
            </div>
            <div className={s.messages}>
                <MessageBlock state={props.state} dispatch={props.dispatch}/>
            </div> 
        </div>
    )
}

export default Dialogs 