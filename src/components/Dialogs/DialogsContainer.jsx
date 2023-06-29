import React from "react";
import Dialogs from "./Dialogs";

import {sendMassegeCreator,updateBodyOfCreator} from '../../redux/message-reducer';

import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect"

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
        updateNewMessage: (newbody) => {
            dispatch(updateBodyOfCreator(newbody));
        }
    }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs);

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);



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