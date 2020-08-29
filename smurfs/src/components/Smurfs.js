import React, {useEffect} from 'react'
import {fetchSmurfs} from '../Actions/'

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
    <div className='dko bg-success m-2 '>
        {arr.map((smurf)=>(<Smurf key={smurf.id}{...smurf}/>))}
    </div>
)
}

export default Smurfs;
