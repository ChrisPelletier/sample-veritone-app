import '../polyfill';
import VeritoneApi from 'veritone-client-js/dist/bundle-browser';

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

export const getCurrentUser = () => {
    let query = `query {
        me {
            name,
            id,
            jsondata
        }
    }`;
    return client.graphql.query(query);
};