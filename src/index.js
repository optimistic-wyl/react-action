import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
// import logger from 'redux-logger'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import reducers from './reducer'
import './config'
import App from './app'
import * as serviceWorker from './serviceWorker';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const timeoutScheduler = store => next => action => {
    if (!action.meta || !action.meta.delay) {
      return next(action)
    }
  
    let timeoutId = setTimeout(
      () => next(action),
      action.meta.delay
    )
  
    return function cancel() {
      clearTimeout(timeoutId)
    }
}

const store = createStore(reducers, compose(
    applyMiddleware(thunk, timeoutScheduler),
    window.devToolsExtension ? window.devToolsExtension() : f => f
))

console.log(process.env.NODE_ENV);

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <App></App>
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));
