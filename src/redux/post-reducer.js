const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts : [
        {id:1, name:"Igor", message:"Sho tam na? yo"},
        {id:2, name:"Oksana", message:"Chotko bro"},
        {id:3, name:"Tolya", message:"YA toLYA TT"}
    ],
    newPostText:'it-kamasutra',
};

export const postReducer = (state = initialState, action) => {

    switch(action.type){
        case ADD_POST :{
            let newPost = {
                id:5,
                name:"hto",
                message:state.newPostText,
            };
            return{
                ...state,
                posts :[...state.posts,newPost],
                newPostText:''
            };
        }
        case UPDATE_NEW_POST_TEXT :{
            return {
                ...state,
                newPostText: action.newText
            };
        }
        default :
            return state;
        }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostActionCreator = (text) => ( { type:UPDATE_NEW_POST_TEXT, newText:text })
export default postReducer;