const initialState = {
    loading:false,
    user:[],
    error:''
}

const reducer = (state = initialState ,action) => { //console.log 看看 action
    console.log("actionaction",action)
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading:true
            }
        case FETCH_USERS_SUCCESS:
            return{
                loading:false,
                users:action.payload,
                error:''
            }
        case FETCH_USERS_FAILURE:
            return{
                loading:false,
                users:[],
                error:action.payload
            }
        default :return state
    }
}
