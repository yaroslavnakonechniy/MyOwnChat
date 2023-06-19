import React from "react";
import User from "./User";
import axios from "axios";
//import {sendMassegeCreator,updateBodyOfCreator} from '../../redux/message-reducer';
import {connect} from "react-redux";
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching} from "../../redux/user-reducer";
import Preloader from "../common/Preloader/Preloader";

class UserContainer extends React.Component {

    componentDidMount(){
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,{
            withCredentials: true
          })
        .then (response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onPageChange = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,{
            withCredentials: true
          })
        .then (response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
        });
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
        isFetching: state.UserPage.isFetching
    }
}

export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching
})(UserContainer);