import {ActionTypes} from '../Actions'

const initialState=[
    {
        arr:[],
        isFetching:false,
        error:null
    }
]
export const reducer=(state=initialState,action)=>{
    console.log(`We are going to start here ${state.arr},${state.isFetching},${state.error}`)

    switch(action.type){

        case ActionTypes.FETCH:
            return {...state,isFetching:true,error:null}
            case ActionTypes.FETCH_SUCCESS:
                return{...state, arr:action.payload,isFetching:false,error:null}
                case ActionTypes.FETCH_ERROR:
                    return {...state,error:action.payload,isFetching:false}
        default:
        return state
        
    }
}

