import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore, combineReducers} from 'redux';
import dataControl from './reduxStore/reducers/dataControl';
import pageControl from './reduxStore/reducers/pageControl';
import {Provider} from 'react-redux';

const rootReducer = combineReducers(dataControl, pageControl);
const store = createStore(rootReducer);

ReactDOM.render(<Provider><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();
