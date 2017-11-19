import { GET_SIGNED_WRITABLE_URL, GET_SIGNED_WRITABLE_URL_SUCCESS, GET_SIGNED_WRITABLE_URL_FAILURE } from '../constants/actionTypes';

const signedWriteableUrl = (state = {}, action) => {
    switch(action.type) {
        case GET_SIGNED_WRITABLE_URL:
            return {...state};
        case GET_SIGNED_WRITABLE_URL_SUCCESS:
            return {
                gettingSignedUrl: true,
                ...state
            };
        case GET_SIGNED_WRITABLE_URL_FAILURE:
            return {
                gettingSignedUrl: false,
                gettingSignedUrlError: true
            };
        default:
            return {...state};
    }
}

export default signedWriteableUrl;