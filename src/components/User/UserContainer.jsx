import React from "react";
import UserC from "./UserC";
//import {sendMassegeCreator,updateBodyOfCreator} from '../../redux/message-reducer';
import {connect} from "react-redux";
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC} from "../../redux/user-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.UserPage.users,
        pageSize: state.UserPage.pageSize,
        totalUserCount: state.UserPage.totalUserCount,
        currentPage: state.UserPage.currentPage
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
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}

let UserContainer = connect(mapStateToProps, mapDispatchToProps)(UserC);


export default UserContainer;