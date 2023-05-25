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
        case ADD_POST :
            let newPost = {
                id:5,
                name:"hto",
                message:state.newPostText,
            };
        
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT :
            state.newPostText = action.newText;
            return state;
        default :
            return state;
        }
}

export default postReducer;