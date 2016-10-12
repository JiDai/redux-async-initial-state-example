import {createStore, combineReducers, applyMiddleware} from 'redux';
import * as reducers from './reducers';
import * as asyncInitialState from 'redux-async-initial-state';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'

import App from './containers/App'


// We need outerReducer to replace full state as soon as it loaded
const reducer = asyncInitialState.outerReducer(combineReducers({
    ...reducers,
    // We need innerReducer to store loading state, i.e. for showing loading spinner
    // If you don't need to handle loading state you may skip it
    asyncInitialState: asyncInitialState.innerReducer,
}));

// Load state function
// Should return promise that resolves application state
const loadStore = () => {
    return new Promise(resolve => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(response => {
                return response.json();
            })
            .then(user => {
                resolve({
                    user: {
                        user: user,
                        isFetching: false
                    }
                });
            });
    });
}

const store = createStore(
    reducer,
    applyMiddleware(asyncInitialState.middleware(loadStore))
)


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
