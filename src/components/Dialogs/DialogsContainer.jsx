import React from "react";
import Dialogs from "./Dialogs";
import {sendMassegeCreator,updateBodyOfCreator} from '../../redux/message-reducer';
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
        updateNewMessage: (newbody) => {
            dispatch(updateBodyOfCreator(newbody));
        }
    }
}

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;