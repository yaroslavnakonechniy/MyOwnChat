import React from "react";
import Myposts from './Myposts';
import {connect} from "react-redux";
import {addPostActionCreator, updateNewPostActionCreator} from '../../../redux/post-reducer';

let mapStateToProps = (state) => {
    return {
        posts : state.PostPage.posts, 
        newPostText : state.PostPage.newPostText

    }
}

let  mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (text) => {
            let action = updateNewPostActionCreator(text);
            dispatch(action);
        }
    }
}

let MypostsContainer = connect(mapStateToProps, mapDispatchToProps)(Myposts);

export default MypostsContainer;