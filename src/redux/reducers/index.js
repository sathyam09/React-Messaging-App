import { combineReducers } from 'redux';

import contactReducerInfo from './contactReducer';
import MessageReducerInfo from './messageReducer';

export default combineReducers({
    contactReducerInfo,
    MessageReducerInfo
});