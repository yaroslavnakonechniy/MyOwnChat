import React from "react";
import User from "./User";
import axios from "axios";
//import {sendMassegeCreator,updateBodyOfCreator} from '../../redux/message-reducer';
import {connect} from "react-redux";
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching} from "../../redux/user-reducer";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

class UserContainer extends React.Component {

    componentDidMount(){
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then (data => {
            
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        });
    }

    onPageChange = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        usersAPI.getUsers(pageNumber,this.props.pageSize).then (data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
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