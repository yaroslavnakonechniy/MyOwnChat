import React from "react";
import s from './Myposts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm } from 'redux-form';
import {required, maxLengthCreator} from '../../../utils/validators/validators';
import Textarea from "../../common/FormsControls/FormsControls";

const Myposts = (props) => {



    let PostDataElements = props.posts.map( p => <Post name={p.name} massage={p.message}/>);

    let newPostElement = React.createRef();

    let addNewPost = (values) => {
        props.addPost(values.myNewPost);
        
    }

    return (
        <div className={s.postBlock}>
            <h3>My post</h3>
            <MypostFormRedux  onSubmit={addNewPost}/>

            <div className={s.posts}>
                { PostDataElements }
            </div>
        </div>

        
    );
}

const MypostsForm = (props) => {
    return (
        <form  onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} 
                name={"myNewPost"} 
                placeholder="Enter your post"
                validate={[required, maxLengthCreator(10)]} />
            </div>
            <div>
                <button>Add Post</button>
            </div>

        </form>
    )
}

const MypostFormRedux = reduxForm({form:"myNewFormPost"})(MypostsForm)

export default Myposts;