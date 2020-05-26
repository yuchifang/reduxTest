import {createStore, applyMiddleware} from 'redux'
import cakeReducer from './cakes/cakeReducer'
import rootReducer from './rootReducer'
import logger from 'redux-logger' 
import { composeWithDevTools } from 'redux-devtools-extension'
// const store = createStore(cakeReducer) 單一reducer

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger)))


export default store