import axios from 'axios';
import { ShowAlert } from '../utility/alert';
import { apidomain, cookiejwt } from '../utility/cookie';
import * as action from './actionType';


export const appostart= ()=>{
    return{
        type: action.APPOINTMENTSTART
    }
}


export const appopost= ()=>{
    return{
        type: action.APPOINTMENTPOST
    }
}

export const appopostinit= (data)=>{
    return dispatch=>{ 
        dispatch(appostart());

        axios(apidomain + `/appointment`,{
            method: 'post',
            data: data,
            headers: {'Authorization': `Bearer ${cookiejwt}`}
        }).then(res=>{
            if(res.data){
                dispatch(appopost());
                ShowAlert([],'باموفقیت انجام شد.','success');
            }
        }).catch(er=>{
            ShowAlert([],'باموفقیت انجام نشد.','fail');
        })

    }
}

export const appoget= (data, length)=>{
    return{
        type: action.APPOINTMENTGET,
        data: data,
        length: length
    }
}

export const appogetinit= (query)=>{
    return dispatch=>{ 
        dispatch(appostart());

        axios(apidomain + query,{
            method: 'get',
            headers: {'Authorization': `Bearer ${cookiejwt}`}
        }).then(res=>{
            if(res.data){
                dispatch(appoget(res.data.data, res.data.length));
            }
        }).catch(er=>{
            console.log(er)
        })

    }
}


export const appogetone= (data)=>{
    return{
        type: action.APPOINTMENTGETONE,
        data: data
    }
}

export const appogetoneinit= (id)=>{
    return dispatch=>{ 
        dispatch(appostart());

        axios(apidomain + `/appointment/${id}`,{
            method: 'get',
            headers: {'Authorization': `Bearer ${cookiejwt}`}
        }).then(res=>{
            if(res.data){
                dispatch(appoget(res.data.data));
                
            }
        }).catch(er=>{
            console.log(er)
        })

    }
}


export const appoupdate= ()=>{
    return{
        type: action.APPOINTMENTUPDATE,
        
    }
}

export const appoupdateinit= (dt,id)=>{
    return dispatch=>{ 
        dispatch(appostart());
           
        axios(apidomain + `/appointment/${id}`,{
            method: 'patch',
            data: dt,
            headers: {'Authorization': `Bearer ${cookiejwt}`}
        }).then(res=>{
            if(res.data){
                dispatch(appoupdate());
                
            }
        }).catch(er=>{
            console.log(er)
        })

    }
}


export const deletereqs= (url)=>{
    return dispatch=>{ 
        
            
        axios(apidomain + url,{
            method: 'delete',
            headers: {'Authorization': `Bearer ${cookiejwt}`}
        }).then(res=>{
            if(res.data){
                
                ShowAlert([],'با موفقیت حذف شد', 'success')
            }
        }).catch(er=>{
            console.log(er)
            ShowAlert([],'با موفقیت حذف نشد', 'fail')
        })

    }
}