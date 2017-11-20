import '../polyfill';
import VeritoneApi from 'veritone-client-js/dist/bundle-browser';
import * as types from '../constants/actionTypes';
import { getCurrentUser } from '../api/api';

export const getUserStart = () => {
    return {
        type: types.GET_USER
    };
};

export const getUserSuccess = (userData) => {
    return {
        type: types.GET_USER_SUCCESS,
        name: userData.name,
        id: userData.id,
        ...userData.jsondata
    };
};

export const getUserFailure = (error) => {
    return {
        type: types.GET_USER_FAILURE,
        error: error
    };
};

export const getUser = () => (dispatch) => {
    dispatch(getUserStart());
    return getCurrentUser()
        .then(response => {
            dispatch(getUserSuccess(response.data.me));
        }, error => {
            dispatch(getUserFailure(error));
        });
};