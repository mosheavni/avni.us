import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Data from './data';
import registerServiceWorker from './registerServiceWorker';

// Add this import:
import { AppContainer } from 'react-hot-loader';

// Wrap the rendering in a function:
const render = (App) => {
    ReactDOM.render(
        // Wrap App inside AppContainer
        <AppContainer>
            <App {...Data}/>
        </AppContainer>,
        document.getElementById('root')
    );
};

// Do this once
registerServiceWorker();

// Render once
render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./App', () => {
        render(App);
    });
}