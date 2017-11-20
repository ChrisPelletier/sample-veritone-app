import { FILES_PICKED } from '../constants/actionTypes';

let initialState = {
    files: []
};

const filePicker = (state = initialState, action) => {
    switch(action.type) {
    case FILES_PICKED:
        return {
            ...state,
            files: action.files
        };
    default:
        return state;
    }
}