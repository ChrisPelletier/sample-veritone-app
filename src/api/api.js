import '../polyfill';
import VeritoneApi from 'veritone-client-js/dist/bundle-browser';

import Cookies from 'universal-cookie';

const cookies = new Cookies();
const oauthToken = cookies.get('oauthToken');

const client = VeritoneApi({
    oauthToken: oauthToken
});