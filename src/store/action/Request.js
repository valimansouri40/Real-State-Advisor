import axios from 'axios';
import { apidomain, cookiejwt } from '../utility/cookie';
import * as action from './actionType';
import {ShowAlert} from '../utility/alert';

export const startreq= ()=>{

    return{
        type: action.STARTREQ
    }
}

export const getallmyreq=(data, length)=>{

    return{
        type: action.GETALLREQ,
        length:length,
        data:data
    }
}


export const getallmyreqinit=( query)=>{

    return dispatch=>{
        dispatch(startreq());
        axios(apidomain + `/request/getallrequest?_id=${query}&page=${1}&limit=${30}`,
        {
            method:'get',
            headers:{'Authorization': `Bearer ${cookiejwt}`}
        }).then(res=>{
            if(res.data){
                
                dispatch(getallmyreq(res.data.data));
               
            }
        }).catch(er=>{
            console.clear()
        })
    }
}

export const getallreq=(data, length)=>{

    return{
        type: action.ALLREQ,
        length:length,
        data:data
    }
}


export const getallreqinit=(page)=>{

    return dispatch=>{
        dispatch(startreq());
        axios(apidomain + page,
        {
            method:'get',
            headers:{'Authorization': `Bearer ${cookiejwt}`}
        }).then(res=>{
            if(res.data){
                
                dispatch(getallreq(res.data.data, res.data.length));
                
            }
        }).catch(er=>{
            console.clear()
        })
    }
}

export const patchreq=()=>{

    return{
        type: action.PATCHREQ
    }
}


export const patchreqinit=( data, id)=>{

    return dispatch=>{
        
        axios(apidomain + `/request/${id}`,
        {
            method:'patch',
            data: data,
            headers:{'Authorization': `Bearer ${cookiejwt}`}
        }).then(res=>{
            if(res.data){
                
                dispatch(patchreqinit());
                 ShowAlert([], 'تغییرات ثبت شد', 'success')
            }
        }).catch(er=>{
            console.clear()
        })
    }
}

const getfilter=(data)=>{
    return{
        type:action.GETALLFILTER,
        data:data
    }
}
export const getallfilterinit=(query)=>{

    return dispatch=>{
        axios(apidomain + `/filter/${query}`,{
            method:'get',
            headers:{'Content-Type':'application/json'}
        }).then(res=>{
                if(res.data){
                        dispatch(getfilter(res.data.data))
                        
                }
        }).catch(er=>{
            console.clear()
        })
    }
}


