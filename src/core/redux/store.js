import { createStore, combineReducers } from 'redux';
import ServiceReducer from './reducers/ServiceReducer';
import AuthenticationReducer from './reducers/AuthenticationReducer';

const reducer = combineReducers({ service: ServiceReducer, auth: AuthenticationReducer });

export const store = createStore(reducer);