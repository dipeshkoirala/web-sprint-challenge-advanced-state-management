import {ActionTypes} from '../Actions'

const initialState=[
    {
        arr:[],
        isFetching:false,
        error:null
    }
]
export const reducer=(state=initialState,action)=>{
    console.log(`We are going to start here ${state.title},${state.editing}`)

    switch(action.type){

        case ActionTypes.FETCH:
            return state
            case ActionTypes.FETCH_SUCCESS:
                return state
                case ActionTypes.FETCH_ERROR:
                    return state
        default:
        return
    
        state
        
    }
}

}