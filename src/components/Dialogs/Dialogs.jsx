import React from "react";
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Messages from './Messages/Messages.jsx';
import { Navigate } from "react-router-dom";
import {Field, reduxForm } from 'redux-form';
import Textarea from "../common/FormsControls/FormsControls";
import {required, maxLengthCreator} from '../../utils/validators/validators';


const Dialogs = (props) => {

    let DialogsDataElements = props.messages.DialogsData.map( d => <DialogItem  name={d.name} key={d.id} id={d.id} img={d.img}/> );
    let MessagesDataElements = props.messages.MessagesData.map( m => <Messages message = {m.message} key={m.id}/>);


    
    let addNewMessage = (values) => {
        
        props.onSendMessageClick(values.newMessageBody);
             
    }
    
    if (!props.isAuth) return <Navigate to='/login' />

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {DialogsDataElements}

            </div>
            <div className={s.messages}>
                <div className={s.messagesData}>{ MessagesDataElements }</div>
                <DialogsFormRedux onSubmit={addNewMessage}/>

            </div>
            
        </div>

    )
}

const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} 
            name="newMessageBody" 
            placeholder="Enter your message"
            validate={[required, maxLengthCreator(100)]}
            /> 
             
            <div><button>Add Message</button></div>
        </form>
    )
}

const DialogsFormRedux = reduxForm({form:"dialogAddMessageForm"})(DialogsForm)

export default Dialogs;