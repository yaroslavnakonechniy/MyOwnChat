import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux"; 
import postReducer from './post-reducer';
import messageReducer from './message-reducer';
import userReducer from './user-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
    PostPage: postReducer,
    MessagesPage: messageReducer,
    UserPage: userReducer,
    Auth: authReducer,
    form: formReducer

});

export let store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;