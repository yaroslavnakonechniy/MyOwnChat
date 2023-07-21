import { authAPI } from "../api/api";
import {stopSubmit} from "redux-form";
const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email:null,
    login:null,
    isAuth:false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case  SET_USER_DATA :{
            return {
                ...state,
                ...action.payload
            }

        }
        default :
        return state;
    }
}

export const setAuthUserDataCreator = (userId,email,login, isAuth) => ({ type: SET_USER_DATA, payload: {userId,email,login,isAuth }});
export const getAuthUserData = () => (dispatch) => {
    authAPI.me()
    .then (response => {
      if (response.data.resultCode === 0) {
          let {id, email, login} = response.data.data;
          dispatch(setAuthUserDataCreator(id, email, login, true));
      }
      
    });
}

export const login  = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
    .then (response => {
      if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
            dispatch("login", {_error:message});
        }
      
    });
}

export const logout  = () => (dispatch) => {
    authAPI.Logout()
    .then (response => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserDataCreator(null, null, null, false));
        }
      
    });
}
export default authReducer;