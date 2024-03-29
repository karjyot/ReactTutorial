import { combineReducers } from 'redux';

import  authReducer  from './../reducers/auth-reducer'
import  userReducer  from './../reducers/user-reducer'

const rootReducer = combineReducers({
    authReducer,
    userReducer
});

export default rootReducer;