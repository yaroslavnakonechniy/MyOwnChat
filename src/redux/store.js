import {postReducer} from './post-reducer';
import {messageReducer} from './message-reducer';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MASSEGE = "SEND-MASSEGE";



let store = {
    _state : {

        PostPage:{
            posts : [
                {id:1, name:"Igor", message:"Sho tam na? yo"},
                {id:2, name:"Oksana", message:"Chotko bro"},
                {id:3, name:"Tolya", message:"YA toLYA TT"}
            ],
            newPostText:'it-kamasutra',
    
        },
        MessagesPage:{
            MessagesData : [
                {id:1, message:"Hi"},
                {id:2, message:"how is your it-kamasutra?"},
                {id:3, message:"Yo Givi"},
                {id:4, message:"Yo NA"}

            ],
            DialogsData : [
                {id:1, name: "Yaroslav", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrMPQlg6jN40Dt1Gs5OaBDdGDCnZv6DL4Tzlw_5_Z_&s"},
                {id:2, name: "Vika", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrMPQlg6jN40Dt1Gs5OaBDdGDCnZv6DL4Tzlw_5_Z_&s"},
                {id:3, name: "Oleg", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrMPQlg6jN40Dt1Gs5OaBDdGDCnZv6DL4Tzlw_5_Z_&s" },
                {id:4, name: "Katya", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrMPQlg6jN40Dt1Gs5OaBDdGDCnZv6DL4Tzlw_5_Z_&s"}
            ],
            NewMessagesBody : 'qwerty',
        }
    },

    getState() {
        return this._state;
    },

    dispatch(action){
        this._state.PostPage = postReducer(this._state.PostPage, action);
        this._state.PostPage = postReducer(this._state.PostPage, action);
        this._state.MessagesPage = messageReducer(this._state.MessagesPage, action);
        this._state.MessagesPage = messageReducer(this._state.MessagesPage, action);

        this._callSubscriber(this._state);
    },

    _callSubscriber() {
        console.log("state change");
    },
    
    sudsribe  (observer) {
        this._callSubscriber = observer;
    }
    

};

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostActionCreator = (text) => ( { type:UPDATE_NEW_POST_TEXT, newText:text })
export const sendMassegeCreator = () => ({ type: SEND_MASSEGE })
export const updateBodyOfCreator = (text_body) => ( { type:UPDATE_NEW_MESSAGE_BODY, body:text_body })

export default store;