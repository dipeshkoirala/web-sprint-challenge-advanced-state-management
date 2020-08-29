import React, {useEffect} from 'react'
import {fetchSmurfs} from '../Actions/index'

import {useDispatch,useSelector} from 'react-redux'
import Smurf from './Smurf'

const Smurfs=()=>{

const arr=useSelector((state)=>state.arr)
const dispatch=useDispatch()

useEffect(()=>{
    dispatch(fetchSmurfs())
},[dispatch])
console.log("SMURFS",arr)
return(
    <div>
        {arr.map((smurf)=>(<Smurf key={smurf.id}{...smurf}/>))}
    </div>
)
}

export default Smurfs;
