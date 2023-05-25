import React from "react";
import Myposts from './Myposts';


import {addPostActionCreator, updateNewPostActionCreator} from '../../../redux/store';

const MypostsContainer = (props) => {

    let state = props.store.getState();
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    
    }

    let onPostChange = (text) => {
        let action = updateNewPostActionCreator(text);
        props.store.dispatch(action);

        
    }
    
    return (<Myposts updateNewPostText={onPostChange} addPost={addPost} posts={state.PostPage.posts} newPostText = {state.PostPage.newPostText} />);
    
}

export default MypostsContainer;