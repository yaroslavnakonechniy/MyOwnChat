import React from "react";
import Myposts from './Myposts';
import {connect} from "react-redux";
import {addPostActionCreator, updateNewPostActionCreator} from '../../../redux/store';

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
        onPostChange: (text) => {
            let action = updateNewPostActionCreator(text);
            dispatch(action);
        }
    }
}

let MypostsContainer = connect(mapStateToProps, mapDispatchToProps)(Myposts);

export default MypostsContainer;