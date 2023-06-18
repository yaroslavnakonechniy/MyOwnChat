import {combineReducers, legacy_createStore as createStore} from "redux"; 
import postReducer from './post-reducer';
import messageReducer from './message-reducer';
import userReducer from './user-reducer';
import authReducer from './auth-reducer';

let reducers = combineReducers({
    PostPage: postReducer,
    MessagesPage: messageReducer,
    UserPage: userReducer,
    Auth: authReducer

});

export let store = createStore(reducers);


export default store;