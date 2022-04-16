import * as actionType from '../action/actionType';

export const initialState={
        loading: false,
        myMark: null ,
        length: null
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
            default: return state;
        }
    }

    export default Reducer;