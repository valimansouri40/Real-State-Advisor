import * as actiotype from '../action/actionType';


export const initialstate={

    reviwes: null,
    loading: false,
    length: null
}


const Reducer=(state=initialstate, action)=>{

    switch(action.type){
        case actiotype.REVIWEANDRATEPOSTS:
            return{
                ...state,
                loading: false
            }
        case actiotype.REVIWEGET:
            return{
                ...state,
                reviwes: action.data,
                length: action.length
            }
        case actiotype.STARTRATE:
            return{
                ...state,
                reviwes: null,
                loading:true
            }
        case actiotype.RATEPATCH:
            return{
                ...state,
                loading:false
            }
        default: return state;
    }
}

export default Reducer;