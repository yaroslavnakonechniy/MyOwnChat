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


export default DialogsContainer;