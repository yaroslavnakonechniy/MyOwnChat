import React from "react";
import s from './Myposts.module.css'
import Post from "./Post/Post";


const Myposts = (props) => {



    let PostDataElements = props.posts.map( p => <Post name={p.name} massage={p.message}/>);

    let newPostElement = React.createRef();


    let onAddPost = () => {
        props.addPost();
        
    
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
        
    }

    return (
        <div className={s.postBlock}>
            <h3>My post</h3>
            <div className={s.addPost}>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
                    
                </div>
                <div>
                    <button onClick={ onAddPost }>Add Post</button>
                </div>

            </div>
            <div className={s.posts}>
                { PostDataElements }
            </div>
        </div>

        
    );
}

export default Myposts;