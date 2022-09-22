import { createStore } from 'redux';
import { accessReducer } from './reducers';

const store = createStore(accessReducer, {accessLogin:false});

export default store;