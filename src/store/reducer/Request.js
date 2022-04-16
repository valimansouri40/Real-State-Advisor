import * as actiontype from '../action/actionType';



export const initialstate={
    data:null,
    loading:false,
    filter: null,
    alldata:null,
   
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
        case actiontype.ALLREQ:
            return{
                ...state,
                loading: false,
                alldata: action.data,
                length: action.length
            }
        case actiontype.PATCHREQ:
            return{
                ...state,
                loading: false
            }
        default:return state;
    }
}

export default Reducer;