import * as actiontype from '../action/actionType';

export const initialstate= {
    loading: false,
    data:null,
    onedata: null,
    length: null
}


const Reducer= (state = initialstate, action)=>{

        switch(action.type){
            case actiontype.APPOINTMENTSTART:
                return{
                    ...state,
                    loading:true,
                    data: null,
                    onedata: null
                }
            case actiontype.APPOINTMENTPOST:
                return{
                    ...state,
                    loading:false
                }
            case actiontype.APPOINTMENTGET:
                return{
                    ...state,
                    data: action.data,
                    loading: false,
                    length: action.length
                } 
            case actiontype.APPOINTMENTGETONE:
                return{
                    ...state,
                    onedata: action.data
                }
            case actiontype.APPOINTMENTUPDATE:
                return{
                    ...state,
                    loading: false
                }
            default: return state;       
        }
}

export default Reducer;