import '../polyfill';
import VeritoneApi from 'veritone-client-js/dist/bundle-browser';
import * as types from '../constants/actionTypes';

import Cookies from 'universal-cookie';

const cookies = new Cookies();
const oauthToken = cookies.get('oauthToken');
let client;
if (oauthToken) {
    client = VeritoneApi({
        oauthToken: oauthToken,
        baseUrl: 'http://local.veritone.com:9000'
    });
}

export const getSignedWriteableUrlStart = () =>  {
    console.log("getSignedWriteableUrlStart action");
    return {
        type: types.GET_SIGNED_WRITABLE_URL
    }
}

export const getSignedWriteableUrlSuccess = () =>  {
    return {
        type: types.GET_SIGNED_WRITABLE_URL_SUCCESS
    }
}

export const getSignedWriteableUrlFailure = () =>  {
    return {
        type: types.GET_SIGNED_WRITABLE_URL_FAILURE
    }
}

export const getSignedWriteableUrl = () => (dispatch) =>  {
    console.log("getSignedWriteableUrl action called");
    dispatch(getSignedWriteableUrlStart())
    let query = `query {
        getSignedWritableUrl {
            url
        }
    }`;
    return client.graphql.query(query);
}

export const getUserStart = () => {
    return {
        type: types.GET_USER
    }
}

export const getUserSuccess = (userData) => {
    return {
        type: types.GET_USER_SUCCESS,
        name: userData.name,
        id: userData.id,
        ...userData.jsondata
    }
}

export const getUserFailure = (error) => {
    return {
        type: types.GET_USER_FAILURE,
        error: error
    }
}

export const getUser = () => (dispatch) => {
    let query = `query {
        me {
            name,
            id,
            jsondata
        }
    }`
    dispatch(getUserStart());
    return client.graphql.query(query)
        .then(response => {
            dispatch(getUserSuccess(response.data.me));
        }, error => {
            dispatch(getUserFailure(error))
        });
}