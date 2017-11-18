import { GET_SIGNED_WRITABLE_URL, GET_SIGNED_WRITABLE_URL_START, 
    GET_SIGNED_WRITABLE_URL_SUCCESS, GET_SIGNED_WRITABLE_URL_FAILURE } from '../constants/actionTypes';

const signedWriteableUrl = (state = {}, action) => {
    console.log(action);
    switch(action.type) {
        case GET_SIGNED_WRITABLE_URL:
            return {...state};
        case GET_SIGNED_WRITABLE_URL_START:
            return {
                gettingSignedUrl: true,
                ...state
            };
        default:
            return {...state};
    }
}

export default signedWriteableUrl;