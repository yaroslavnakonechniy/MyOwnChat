import React from "react";
import User from "./User";
import axios from "axios";
//import {sendMassegeCreator,updateBodyOfCreator} from '../../redux/message-reducer';
import {connect} from "react-redux";
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers} from "../../redux/user-reducer";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

class UserContainer extends React.Component {

    componentDidMount(){
       this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChange = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {

        return <>

        { this.props.isFetching ? <Preloader /> : null}
                <User totalUserCount = {this.props.totalUserCount}
                    currentPage = {this.props.currentPage}
                    pageSize = {this.props.pageSize}
                    users = {this.props.users}
                    unfollow = {this.props.unfollow}
                    follow = {this.props.follow}
                    onPageChange = {this.onPageChange}
                    followingInProgress = {this.props.followingInProgress}
        
                />
        </>
        

    }
}


let mapStateToProps = (state) => {
    return {
        users: state.UserPage.users,
        pageSize: state.UserPage.pageSize,
        totalUserCount: state.UserPage.totalUserCount,
        currentPage: state.UserPage.currentPage,
        isFetching: state.UserPage.isFetching,
        followingInProgress: state.UserPage.followingInProgress
    }
}

export default connect(mapStateToProps, {
    follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers})(UserContainer);