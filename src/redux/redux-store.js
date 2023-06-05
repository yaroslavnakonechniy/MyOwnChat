import {combineReducers, legacy_createStore as createStore} from "redux"; 
import postReducer from './post-reducer';
import messageReducer from './message-reducer';
import userReducer from './user-reducer';

let reducers = combineReducers({
    PostPage: postReducer,
    MessagesPage: messageReducer,
    UserPage: userReducer

});

export let store = createStore(reducers);


export default store;