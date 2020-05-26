import React from 'react'

import {useSelector ,useDispatch} from 'react-redux'

import { buyRice } from './redux'

function HooksRiceContainer(){
    const numOfRice = useSelector(state => state.rice.numOfRice)
    const dispath = useDispatch()
    return(
        <div>
            <h2>Num of Rice - {numOfRice}</h2>
            <button onClick={()=>dispath(buyRice())}>Buy Rice</button>
        </div>
    )
}

export default HooksRiceContainer