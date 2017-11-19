import { combineReducers } from 'redux';
import signedWriteableUrl from './signedWriteableUrl';
import user from './user';

const rootReducer = combineReducers({
    signedWriteableUrl,
    user
});

export default rootReducer;