import * as actiontype from '../action/actionType';


export const initialState={

    loading:false,
    error:false,
    data:null
}



const Reducer= (state=initialState, action)=>{

    switch(action.type){

        case actiontype.WORKSAMPELERROR:
            return{
                ...state,
                loading:false,
                error:true
            }
        case actiontype.WORKSAMPELSTART:
            return{
                ...state,
                loading: true,
                error: false
            }
        case actiontype.WORKSAMPELPOST:
            return{
                ...state,
                loading: false,
                error:false
            }
        case actiontype.WORKSAMPELGETALL:
            return{
                ...state,
                loading: false,
                error:false,
                data: action.dt
            }
        default: return state; 
    }
}

export default Reducer;