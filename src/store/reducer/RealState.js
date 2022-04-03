import * as actionType from '../action/actionType';


export const initialState={
    loading:false,
    error:false,
    AllData:null,
    OneData:null,
    cityone:null,
    cityall:null,
    areaone:null,
    areaall:null,
    length:null
}


const Reducer= (state= initialState, action)=>{

    switch(action.type){

        case actionType.REALSTATESTART:
           return {
                ...state,
                loading:true,
                error:false
            };
            case actionType.REALSTATEERROR:
                return {
                     ...state,
                     loading:false,
                     error:true
                 }
                 case actionType.REALSTATEPOST:
                    return {
                         ...state,
                         loading:false,
                         error:false
                     }
              case actionType.REALSTATEGETALL:
             return {
                            ...state,
                            AllData: action.data.data,
                            length:action.data.length,
                             loading:false,
                         error:false
              }
             case actionType.REALSTATEGETONE:
                    return {
                           ...state,
                          loading:false,
                         error:false,
                         OneData:action.onedata
                         }
             case actionType.REALSTATEPATCH:
                        return {
                       ...state,
                          loading:false,
                        error:false,
                         }
            case actionType.CITYGET:
                return{
                    ...state,
                    cityone:action.data
                }
                case actionType.CITYGETALL:
                    return{
                        ...state,
                        cityall:action.data
                    }
                    case actionType.AREAGET:
                return{
                    ...state,
                    areaone:action.data
                }
                case actionType.AREAGETALL:
                return{
                    ...state,
                    areaall:action.data
                }
            default: return state;
    }
}

export default Reducer;