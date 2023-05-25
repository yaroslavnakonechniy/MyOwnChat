import React from "react";
import s from './Myposts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostActionCreator} from '../../../redux/store';

const Myposts = (props) => {



    let PostDataElements = props.posts.PostPage.posts.map( p => <Post name={p.name} massage={p.message}/>);

    let newPostElement = React.createRef();


    let addPost = () => {
        props.dispatch(addPostActionCreator());
    
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostActionCreator(text));
        
    }

    return (
        <div className={s.postBlock}>
            <h3>My post</h3>
            <div className={s.addPost}>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
                    
                </div>
                <div>
                    <button onClick={ addPost }>Add Post</button>
                </div>

            </div>
            <div className={s.posts}>
                { PostDataElements }
            </div>
        </div>

        
    );
}

export default Myposts;