import React, {useEffect} from 'react'
import {fetchSmurfs} from '../Actions/index'

import {useDispatch,useSelector} from 'react-redux'
import Smurf from './Smurf'

const Smurfs=()=>{

const smurfs=useSelector((state)=>state.smurfs)
const dispatch=useDispatch()

useEffect(()=>{
    dispatch(fetchSmurfs())
},[dispatch])
console.log("SMURFS",smurfs)
return(
    <div>
        {smurfs.map((smurf)=>(<Smurf key={smurf.id}{...smurf}/>))}
    </div>
)
}

export default Smurfs;
