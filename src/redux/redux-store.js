import {combineReducers, legacy_createStore as createStore} from "redux"; 
import postReducer from './post-reducer';
import messageReducer from './message-reducer';

let reducers = combineReducers({
    PostPage: postReducer,
    MessagesPage: messageReducer

});

export let store = createStore(reducers);


export default store;