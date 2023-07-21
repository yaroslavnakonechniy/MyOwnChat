import React from "react";
import User from "./User";
//import {sendMassegeCreator,updateBodyOfCreator} from '../../redux/message-reducer';
import {connect} from "react-redux";
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers} from "../../redux/user-reducer";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {getNewUsers, getPageSize, getTotalUserCount, getCurentPage, getIsFetching, getFollowingInProgress} from "../../redux/user-selectors";

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
        users: getNewUsers(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUserCount(state),
        currentPage: getCurentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    connect(mapStateToProps, {
    follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers}))(UserContainer);

