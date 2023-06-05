import React from "react";
import User from "./User";
//import {sendMassegeCreator,updateBodyOfCreator} from '../../redux/message-reducer';
import {connect} from "react-redux";
import { followAC, unfollowAC, setUsersAC} from "../../redux/user-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.UserPage.users
    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}

let UserContainer = connect(mapStateToProps, mapDispatchToProps)(User);


export default UserContainer;