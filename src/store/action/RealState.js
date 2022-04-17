import axios from 'axios';
import { ShowAlert } from '../utility/alert';
import { apidomain, cookiejwt } from '../utility/cookie';
import * as action from './actionType';


export const startrealState=()=>{
    return{
        type:action.STARTAUTH
    }
}

export const errorrealState=()=>{
    return{
        type:action.ERRORAUTH
    }
}

export const REALSTATEPOST=()=>{
    return{
        type:action.REALSTATEPOST,
       
    }
}

export const REALSTATEPOSTINIT=(data)=>{

    return dispatch=>{
        dispatch(startrealState());

        axios(apidomain + `/realstate`,{
            data:data,
            method:'post',
            headers:{ 'Authorization': `Bearer ${cookiejwt}`}
        }).then(res=>{
                if(res.data){
                    dispatch(REALSTATEPOST());
                    ShowAlert([], 'ملک با موفقیت ساخته شد', 'success')
                }
        }).catch(er=>{
            dispatch(errorrealState())
            ShowAlert([],'انجام نشد','fail')
        })
    }
}

export const savetabserchbox=(data)=>{
    return{
        type: action.SAVETABSEARCHBOX ,
        data: data
    }
}

export const savetabserchboxinit= (tab)=>{

    return dispatch=>{

        dispatch(savetabserchbox(tab))
    }
}

export const REALSTATEGETALL=(data)=>{
    return{
        type:action.REALSTATEGETALL,
        data:data
    }
}

export const REALSTATEGETALLINIT=(page,query, auth)=>{

    return dispatch=>{
        dispatch(startrealState());
        
        axios(apidomain + `/realstate?page=${page}&limit=20&${query}`,{
            method:'get',
            headers:{'Authorization':'application/json'}
        }).then(res=>{
                if(res.data){
                    dispatch(REALSTATEGETALL(res.data));
                    
                }
        }).catch(er=>{
            dispatch(errorrealState())
            // ShowAlert([],'انجام نشد','fail')
        })
    }
}


export const REALSTATEGETONE=(onedata)=>{
    return{
        type:action.REALSTATEGETONE,
        onedata:onedata
    }
}

export const REALSTATEGETONEINIT=(id)=>{

    return dispatch=>{
        dispatch(startrealState());

        axios(apidomain + `/realstate/${id}`,{
            method:'get'
        }).then(res=>{
                if(res.data){
                    dispatch(REALSTATEGETONE(res.data.data));
                
                }
        }).catch(er=>{
            dispatch(errorrealState())
            ShowAlert([],'انجام نشد','fail')
        })
    }
}


export const REALSTATEPATCH=()=>{
    return{
        type:action.REALSTATEPATCH,
       
    }
}

export const REALSTATEPATCHINIT=(data,id)=>{

    return dispatch=>{
        dispatch(startrealState());
            
        axios(apidomain + `/realstate/${id}`,{
            data:data,
            method:'patch',
            headers:{ 'Authorization': `Bearer ${cookiejwt}`}
        }).then(res=>{
                if(res.data){
                    dispatch(REALSTATEPOST());
                    ShowAlert([], 'ملک با موفقیت بروزرسانی شد', 'success')
                }
        }).catch(er=>{
            dispatch(errorrealState())
            ShowAlert([],'انجام نشد','fail')
        })
    }
}





export const REALSTATEDELETEONEINIT=(id)=>{

    return dispatch=>{
       
           
        axios(apidomain + `/realstate/${id}`,{
            method:'delete',
            headers:{ 'Authorization': `Bearer ${cookiejwt}`}
        }).then(res=>{
                if(res.data){
                    window.location.reload();
                    ShowAlert([],'باموفقیت حذف شد','success')
                }
        }).catch(er=>{
            ShowAlert([],'انجام نشد','fail')
        })
    }
}


export const areagetall=(data)=>{

    return{
        type:action.AREAGETALL,
        data:data
    }
}
export const areaget=(data)=>{

    return{
        type:action.AREAGET,
        data:data
    }
}


export const citygetall=(data)=>{

    return{
        type:action.CITYGETALL,
        data:data
    }
}
export const cityget=(data)=>{

    return{
        type:action.CITYGET,
        data:data
    }
}



export const changefilehandller=(data, path, query)=>{

    return dispatch=>{
       
        axios(apidomain + `/realstate/${path}?${query}`,
        {
            method:'post',
            data:data,
            headers:{ 'Authorization': `Bearer ${cookiejwt}`}
        }).then(res=>{
                
                switch(path){
                    case 'getcity':
                        dispatch(cityget(res.data.data));
                    break;
                    case 'getallcity':
                        dispatch(citygetall(res.data.data))
                        break;
                     case 'getarea':
                        dispatch(areaget(res.data.data));
                        break;
                    case 'getallarea':
                        dispatch(areagetall(res.data.data))
                         break;
                    case 'deletearea':
                        window.location.reload();
                        break;
                    case 'deletecity':
                        window.location.reload();
                        break;
                    default: ShowAlert([],'با موفقیت انجام شد','success')
                        break;
                
            }
        }).catch(er=>{
           console.log('error writefile')
        })
    }
}


export const realstatestartfocstart= ()=>{
    return{
        type: action.REALSTATEFOCUSSTART
    }
}


export const realstatestartfoc= (foc)=>{
    return{
        type: action.REALSTATEFOCUS,
        foc:foc
    }
}


export const realstatestartfocinit= (query)=>{
    return dispatch=>{
            dispatch(realstatestartfocstart());
          
            axios(apidomain + query,{
                method: 'get',
                headers:{ 'Authorization': `Bearer ${cookiejwt}`}
            }).then(res=>{
                if(res.data){
                    dispatch(realstatestartfoc(res.data.data));
                
                }
            }).catch(er=>{
                console.log(er)
            })
    }
}
