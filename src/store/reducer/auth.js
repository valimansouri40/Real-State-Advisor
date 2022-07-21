
import * as actiontype from '../action/actionType';


export const initialstate={
    loading:false,
    load:false,
    changeroledata:null,
    error:true,
    data:null,
    role:null,
    expiresCode:null,
    pass:false,
    advisor: null
};


 const Reducer=(state=initialstate,action)=>{
    switch(action.type){
        case actiontype.UPDATEPROFILE:
            return{
                ...state,
                loading: false
            }
        case actiontype.SENDREQ:
            return{
                ...state,
                expiresCode:180
            }
        case actiontype.ERRORAUTH:
            return{
                ...state,
                loading:false,
                error:true
            }
        case actiontype.STARTAUTH:
            return{
                ...state,
                loading:true,
                error:false
            }
        case actiontype.SETAUTHLOGIN:
                let date;
                if(action.path === '#/sineup' || action.path === '#/forgotpassword' ){
                    date= 180;
                }else{
                    date= null;
                }
            return{
                ...state,
                loading:false,
                date:null,
                expiresCode:date
            }
         case actiontype.SETAUTHGETME:
            return{
                ...state,
                loading:false,
                data:action.dt,
                role: action.dt.role
            }
        case actiontype.EXPIRESCODE:
            return{
                ...state,
                expiresCode:action.time
            }
         case actiontype.SETAUTHCHANGEPASS:
                return{
                    ...state,
                    pass:true
                }
            case actiontype.STARTCHANGEROLE:
                return{
                    ...state,
                   changeroledata:null,
                   load: true
                }
            case actiontype.CHANGEROLE:
                return{
                    ...state,
                    load: false
                }
            case actiontype.FINDPHONENUMBER:
                return{
                    ...state,
                    changeroledata: action.data,
                    load: false
                }
            case actiontype.GETADVISOR:
                return{
                    ...state,
                    advisor: action.advisor
                }
            default :return state;
    }
 }

 export default Reducer;