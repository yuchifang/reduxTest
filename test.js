const redux = require('redux')

const reduxLogger = require('redux-logger')
const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICEREAM'


function buyCake(){
    return{
        type: BUY_CAKE,
        info:'First redux action'
    }
}

function buyIceCream(){
    return{
        type: BUY_ICECREAM

    }
}
// (previosState ,action) => newState

const initialCaKeState = {
    numOfCakes: 10
}

const initialIceCreamState = {
    numIceCreams: 20
}
const CakeReducer = (state =initialCaKeState ,action) => {
    switch(action.type){
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        default: return state
    }
}

const iceCreamReducer = (state =initialIceCreamState ,action) => {
    switch(action.type){
        case BUY_CAKE:
            return {
                ...state,
                numIceCreams: state.numIceCreams - 1
            }
        default: return state
    }
}


const rootReducer = combineReducers({
    cake:CakeReducer,
    iceCream:iceCreamReducer
})

const store = createStore(rootReducer,applyMiddleware(logger))

console.log("Initial state",store.getState())

const unsubscribe = store.subscribe(()=> console.log("Updated state",store.getState()))

store.dispatch(buyCake())

store.dispatch(buyIceCream())

unsubscribe()