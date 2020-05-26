import React from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import { buyIceCream } from './redux'


 function HooksIceCreamContainer() {
    const numOfIceCreams = useSelector(state =>state.iceCream.numOfIceCreams)
    const dispath = useDispatch()
    return (
        <div>
            <h2>Num of IceCream - {numOfIceCreams}</h2>
            <button onClick={()=> dispath(buyIceCream())}>Buy iceCream</button>
        </div>
    )
}

export default HooksIceCreamContainer