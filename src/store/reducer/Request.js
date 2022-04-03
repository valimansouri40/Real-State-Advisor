import * as actiontype from '../action/actionType';



export const initialstate={
    data:null,
    loading:false,
    filter: null
}


const Reducer=(state=initialstate, action)=>{

    switch(action.type){
        case actiontype.GETALLREQ:
            return{
                ...state,
                data: action.data,
                loading:true
            }
        case actiontype.STARTREQ:
            return{
                ...state,
                loading:true,
                data:null
            }
        case actiontype.GETALLFILTER:
            return{
                ...state,
                loading:true,
                filter:action.data
            }
        default:return state;
    }
}

export default Reducer;