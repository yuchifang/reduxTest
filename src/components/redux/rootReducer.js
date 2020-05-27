import {combineReducers} from 'redux'
import cakeReducer from './cakes/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'
import riceReducer from './rice/riceReducer'
import userReducer from './user/userReducer'


const rootReducer = combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer,
    rice:riceReducer,
    user:userReducer
})


export default rootReducer