import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore, combineReducers} from 'redux';
import dataControlReducer from './reduxStore/reducers/dataControl';
import pageControlReducer from './reduxStore/reducers/pageControl';
import {Provider} from 'react-redux';

const rootReducer = combineReducers( {
    dataControl: dataControlReducer,
    pageControl: pageControlReducer
});

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();
