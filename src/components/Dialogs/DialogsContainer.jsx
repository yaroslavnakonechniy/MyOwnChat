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


export default DialogsContainer;