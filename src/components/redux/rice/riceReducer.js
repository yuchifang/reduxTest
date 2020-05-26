import { BUY_RICE } from './riceTypes'

const initialState = {
    numOfRice:200
}

const riceReducer = (state =initialState ,action) => {
    switch(action.type){
        case BUY_RICE:
            return{
                ...state,
                numOfRice:state.numOfRice - 10
            }
            default:
                return state
    }
}

export default riceReducer