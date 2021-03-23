import { createStore } from 'redux';
import tokenReducer from './Auth/tokenReducer';

const store = createStore(tokenReducer);

export default store;