import { usersAPI } from "../api/api";
import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = "SET_STATUS";

let initialState = {
    posts : [
        {id:1, name:"Igor", message:"Sho tam na? yo"},
        {id:2, name:"Oksana", message:"Chotko bro"},
        {id:3, name:"Tolya", message:"YA toLYA TT"}
    ],
    
    profile: null,
    status: "qwerty"

};

export const postReducer = (state = initialState, action) => {

    switch(action.type){
        case ADD_POST :{
            let newPost = {
                id:5,
                name:"hto",
                message:action.myNewPost,
            };
            return{
                ...state,
                posts :[...state.posts,newPost],
                
            };
        }

        case SET_USER_PROFILE : {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_STATUS : {
            return {
                ...state,
                status: action.status
            };
        }

        default :
            return state;
        }
}

export const addPostActionCreator = (myNewPost) => ({ type: ADD_POST ,myNewPost})
export const setUserProfile = (profile) => ({type:SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type:SET_STATUS, status})
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then (response => {
        dispatch(setUserProfile(response.data));
    });
} 
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then (response => {
        debugger
        dispatch(setStatus(response.data));
    });
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then (response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }

    });
}
export default postReducer;