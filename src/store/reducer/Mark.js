import * as actionType from '../action/actionType';

export const initialState={
        loading: false,
        myMark: null ,
        length: null,
        modal: false,
        modal2: false
}


const Reducer=(state = initialState, action)=>{

        switch(action.type){

            case actionType.MARKSTART:
                return{
                    ...state,
                    loading: true,

                }
            case actionType.GETALLMYMARK:
                return{
                    ...state,
                    myMark: action.data,
                    loading: false,
                    length: action.length
                }
            case actionType.ADDMARK:
                return{
                    ...state,
                    loading: false
                }
            case actionType.CLOSEMODAL:
                return{
                    ...state,
                    modal: action.dt,
                    modal2: action.dt2
                }
            default: return state;
        }
    }

    export default Reducer;