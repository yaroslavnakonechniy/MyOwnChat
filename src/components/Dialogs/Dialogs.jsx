import React from "react";
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Messages from './Messages/Messages.jsx';
import {sendMassegeCreator,updateBodyOfCreator} from '../../redux/store';

const Dialogs = (props) => {



    let DialogsDataElements = props.stateDialog.DialogsData.map( d => <DialogItem  name={d.name} id={d.id} img={d.img}/> );
    let MessagesDataElements = props.stateDialog.MessagesData.map( m => <Messages message = {m.message}/>);
    let newMessageBodyM = props.stateDialog.NewMessagesBody;
    let newMessageElement = React.createRef();

    let onSendMessageClick = () => {
        props.store.dispatch(sendMassegeCreator());
    }

    let newMessage = () => {
        debugger;
        let newbody = newMessageElement.current.value;
        props.store.dispatch(updateBodyOfCreator(newbody));
        
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {DialogsDataElements}

            </div>
            <div className={s.messages}>
                <div className={s.messagesData}>{ MessagesDataElements }</div>
                <div className={s.messagesData}>
                    <div><textarea value ={newMessageBodyM} placeholder='Enter your message' onChange={newMessage} ref={newMessageElement}></textarea></div>
                    <div><button onClick={onSendMessageClick}>Add Message</button></div>
                </div>

            </div>
            
        </div>

    )
}

export default Dialogs;