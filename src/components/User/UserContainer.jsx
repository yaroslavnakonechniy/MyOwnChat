import React from "react";
import User from "./User";
import axios from "axios";
//import {sendMassegeCreator,updateBodyOfCreator} from '../../redux/message-reducer';
import {connect} from "react-redux";
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC} from "../../redux/user-reducer";

class UserContainer extends React.Component {

    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then (response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onPageChange = (pageNumber) => {
        
        this.props.setCurrentPage(pageNumber);
        
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then (response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {

        return <User totalUserCount = {this.props.totalUserCount}
                    currentPage = {this.props.currentPage}
                    pageSize = {this.props.pageSize}
                    users = {this.props.users}
                    unfollow = {this.props.unfollow}
                    follow = {this.props.follow}
                    onPageChange = {this.onPageChange}
        
        />
    }
}


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

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);