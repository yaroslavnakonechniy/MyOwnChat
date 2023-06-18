import React from "react";
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Messages from './Messages/Messages.jsx';


const Dialogs = (props) => {

    let DialogsDataElements = props.messages.DialogsData.map( d => <DialogItem  name={d.name} key={d.id} id={d.id} img={d.img}/> );
    let MessagesDataElements = props.messages.MessagesData.map( m => <Messages message = {m.message} key={m.id}/>);
    let newMessageBodyM = props.messages.NewMessagesBody;
    let newMessageElement = React.createRef();

    let SendMessage = () => {
        props.onSendMessageClick();
    }

    let newMessage = () => {
        let newbody = newMessageElement.current.value;
        props.updateNewMessage(newbody);
        
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
                    <div><button onClick={SendMessage}>Add Message</button></div>
                </div>

            </div>
            
        </div>

    )
}

export default Dialogs;