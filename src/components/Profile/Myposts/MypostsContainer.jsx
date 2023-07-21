import React from "react";
import Myposts from './Myposts';
import {connect} from "react-redux";
import {addPostActionCreator} from '../../../redux/post-reducer';

let mapStateToProps = (state) => {
    return {
        posts : state.PostPage.posts, 
        newPostText : state.PostPage.newPostText

    }
}

let  mapDispatchToProps = (dispatch) => {
    return {
        addPost: (myNewPost) => {
            dispatch(addPostActionCreator(myNewPost));
        }
    }
}

let MypostsContainer = connect(mapStateToProps, mapDispatchToProps)(Myposts);

export default MypostsContainer;