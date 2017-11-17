import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import Cookies from 'universal-cookie';

const cookies = new Cookies();
const oauthToken = cookies.get('oauthToken');

if (!oauthToken) {
    window.location = 'http://local.veritone-sample-app.com:9000/auth/veritone';
} else {
    init();
}

function init() {
    ReactDOM.render(<App />, document.getElementById('root'));
    registerServiceWorker();
}
