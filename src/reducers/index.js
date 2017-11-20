import { combineReducers } from 'redux';
import signedWriteableUrl from './signedWriteableUrl';
import user from './user';
import filePicker from './filePicker';

const rootReducer = combineReducers({
    signedWriteableUrl,
    user,
    filePicker
});

export default rootReducer;