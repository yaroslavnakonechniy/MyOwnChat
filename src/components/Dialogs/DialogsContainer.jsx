import React from "react";
import Dialogs from "./Dialogs";
import {sendMassegeCreator,updateBodyOfCreator} from '../../redux/store';

const DialogsContainer = (props) => {

    let state = props.store.getState().MessagesPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMassegeCreator());
    }

    let newMessage = (newbody) => {
        props.store.dispatch(updateBodyOfCreator(newbody));
        
    }

    return (<Dialogs onSendMessageClick = {onSendMessageClick} 
                     updateBodyOfCreator = {newMessage}
                     messages = {state}  />)
}

export default DialogsContainer;