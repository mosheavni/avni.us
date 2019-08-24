import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Data from './data';
import { unregister } from './serviceWorker';


ReactDOM.render(
    <App {...Data}/>,
    document.getElementById('root')
);

unregister();
