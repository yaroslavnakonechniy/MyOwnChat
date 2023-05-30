import React from "react";
import Dialogs from "./Dialogs";
import {sendMassegeCreator,updateBodyOfCreator} from '../../redux/store';

import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        messages: state.MessagesPage
    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        onSendMessageClick: () => {
            dispatch(sendMassegeCreator());
        },
        newMessage: (newbody) => {
            dispatch(updateBodyOfCreator(newbody));
        }
    }
}

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);



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